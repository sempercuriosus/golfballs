require('dotenv').config();
const mongoose = require('mongoose');
const DB = mongoose.connection;

const CONNECTION_STRING =
  process.env.CONNECTION_STRING + process.env.DB_NAME;

try {
  mongoose.connect(CONNECTION_STRING || '');

  //Golfballs
  console.info('- GOLFBALLS -');
  const GOLFBALL_MODEL = require('../models/golfballs');
  const GOLFBALL_SEED = require('./create-golfballs');

  DB.once('open', async () => {
    try {
      console.info('  > Dropping GOLFBALL Data');

      // GolfBalls
      try {
        const GOLFBALL_COLLECTION =
          DB.collections.golfballs.collectionName;

        await DB.db.dropCollection(GOLFBALL_COLLECTION);

        console.info('  > GOLFBALL Data Dropped');

        console.info('  > Creating GOLFBALLS Document');

        await GOLFBALL_MODEL.create(GOLFBALL_SEED);

        console.info('  > GOLFBALLS Document Created');

        console.log();
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      console.error(error);

      process.exit(1);
    }

    // Sales
    console.info('- SALES -');
    const SALES_MODEL = require('../models/sales');
    // const SALES_SEED = require('./create-sales.json');

    try {
      console.info('  > Dropping SALES Data');

      const SALES_COLLECTION =
        DB.collections.sales.collectionName;

      await DB.db.dropCollection(SALES_COLLECTION);

      console.info('  > SALES Data Dropped');

      console.info('  > Creating SALES Document');

      await SALES_MODEL.create({});

      console.info('  > SALES Document Created');

      console.log();
    } catch (error) {
      console.error(error);

      process.exit(1);
    }

    process.exit(0);
  });
} catch (error) {
  console.error(error);
}

