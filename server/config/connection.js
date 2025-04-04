require('dotenv').config();
const mongoose = require('mongoose');
const DB = mongoose.connection; // elevating this to be accessible to both open and close
const WriteFile = require('../helpers/docWrite');

function CONNECT_DB() {
  const URI = process.env.CONNECTION_STRING;
  const DOCUMENT = process.env.DB_NAME;
  const CONNECTION = URI + DOCUMENT;

  try {
    mongoose.connect(CONNECTION);

    DB.once('open', () => {
      console.log('Connected to Database');
    });
  } catch (error) {
    console.error('!!! - Database Error - Connect:', error);
  }

  try {
    DB.on('disconnected', () => {
      console.log('Disconnected from Database');
    });
  } catch (error) {
    console.error('!!! - Database Error - Disconnect:', error);
  }
}

async function CLOSE_DB() {
  try {
    console.log('Close Connection Received');

    // This should not also GET the data, so where is the best spot for that?
    // If this did GET the data then there would be no real SOC here...

    WriteFile('THIS IS A TEST FROM THE CONNECTION');

    DB.close(() => {
      console.log('Closing Database Connection');
    });
  } catch (error) {
    console.error('!!! - Database Error - Close:', error);
  }

  process.exit(1);
}
module.exports = { CONNECT_DB, CLOSE_DB };

