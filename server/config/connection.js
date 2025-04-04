require('dotenv').config();
const mongoose = require('mongoose');
const DB = mongoose.connection; // elevating this to be accessible to both open and close

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
  console.log('Close Connection Received');
}

module.exports = { CONNECT_DB, CLOSE_DB };

