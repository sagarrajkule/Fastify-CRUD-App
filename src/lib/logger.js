const pino = require('pino');

module.exports = () => {
  return pino({
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
  });
};
