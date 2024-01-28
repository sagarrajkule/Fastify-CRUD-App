'use strict'

const fastify = require('fastify')({
	logger: true
});
const cors = require('@fastify/cors');
const PORT = 3000;

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

// starting server
const start = async () => {
	try {
		await fastify.listen({ 
			port: PORT || 3000 , 
			listenTextResolver: (address) => { 
				return `Server is listening at ${address}` 
			} 
		  })
	} catch (error) {
		fastify.log.error('Error running fastify server');
        process.exit(1);
	}
};

start();