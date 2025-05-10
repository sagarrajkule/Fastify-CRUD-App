'use strict';

const config = require('./config');
const fastify = require('fastify')({
  logger: {
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'SYS:standard',
        ignore: 'pid,hostname'
      }
    },
    level: 'info',
    serializers: {
      req() {
        return undefined; // disables "incoming request" log
      },
      res() {
        return undefined; // disables "request completed" log
      }
    }
  },
  disableRequestLogging: true // This disables default "incoming request" and "request completed"
});

const cors = require('@fastify/cors');
const PORT = config.port;

fastify.register(cors);
fastify.register(require('fastify-formbody'));

const routes = require('./routes/index');

// Import db connection
const connectToMongoDB = require('./lib/db');

// Connect to MongoDB
connectToMongoDB();

routes.forEach((route) => {
  fastify.route(route);
});

// Middleware to log request and response details
fastify.addHook('onResponse', async (request, reply) => {
  const { method, url } = request.raw;
  const statusCode = reply.statusCode;
  const responseTime = reply.elapsedTime.toFixed(2);
  const ip = request.ip;
  const reqId = request.id;
  const userAgent = request.headers['user-agent'] || 'N/A';
  const timestamp = new Date().toISOString();

  const logMsg = `[${timestamp}] [${reqId}] ${method} ${url} → ${statusCode} | ${responseTime}ms | IP: ${ip} | UA: ${userAgent}`;
  fastify.log.info(logMsg);
});

// starting server
const start = async () => {
  try {
    await fastify.listen({
      port: PORT,
      listenTextResolver: (address) => {
        return `Server is listening at ${address}`;
      },
    });
  } catch (error) {
    console.error('Error starting server:', error);
    fastify.log.error('Error running fastify server');
    process.exit(1);
  }
};

// Start the server
start();
