const mongoose = require('mongoose');
const config = require('../config');

async function connect() {
  try {
    await mongoose.connect(config.mongoUrl); // No extra options needed
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Optional: Exit if DB connection fails
  }
}

module.exports = connect;
