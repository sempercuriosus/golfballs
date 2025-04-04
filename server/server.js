const EXPRESS = require('express');
const ROUTES = require('./routes');
const { CONNECT_DB } = require('./config/connection');
const WriteFile = require('./helpers/docWrite');
const INTERVAL = 60 * 60 * 1000;

const APP = EXPRESS();
const PORT = process.env.PORT || 3001;

APP.use(EXPRESS.json());
APP.use(EXPRESS.urlencoded({ extended: true }));

// turn on routes
APP.use(ROUTES);

// Initial Path
APP.get('/', (req, res) => {
  res.send('<h1>Golfballs!</h1>');
});

// Test Route
APP.get('/isup', (req, res) => {
  res.send(
    '<h1>I am running! 👟</h1><br/><h3>Watch me go...</h3>',
  );
});

CONNECT_DB();

APP.listen(PORT, () => {
  console.info(`API server running on port ${PORT}!`);
});

setInterval(() => {
  WriteFile();
}, INTERVAL);

