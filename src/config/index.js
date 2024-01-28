const envList = {
    production: `prod`,
    staging: `stage`,
    development: `dev`,
}

require('dotenv').config({ path: `.env.${envList[process.env.NODE_ENV] }` || `dev` });

const config = {
  port: process.env.PORT || 3000,
  mongoUrl: process.env.MONGODB_URL || 'mongodb://localhost:27017/fastifycrud',
};

module.exports = config;
