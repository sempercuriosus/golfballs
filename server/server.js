const express = require('express');
const routes = require('./routes');
const db = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// Initial Path
app.get('/', (req, res) => {
  res.send('<h1>Golfballs!</h1>');
});

// Test Route
app.get('/isup', (req, res) => {
  res.send(
    '<h1>I am running! 👟</h1><br/><h3>Watch me go...</h3>',
  );
});

if (db) {
  db.once('open', () => {
    app.listen(PORT, () => {
      console.info(`API server running on port ${PORT}!`);
      console.info(``);
    });
  });
} else {
  console.log('db is empty');
}

