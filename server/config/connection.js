require('dotenv').config();
const mongoose = require('mongoose');

const connectionString = process.env.CONNECTION_STRING;
const dbName = process.env.DB_NAME;

console.log(connectionString + dbName);

mongoose.connect(connectionString + dbName || '');

module.exports = mongoose.connection;

