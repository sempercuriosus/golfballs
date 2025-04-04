// Declare Lib & Model
const ROUTER = require('express').Router();
const GOLFBALLS = require('../../models/golfballs');

// GET
ROUTER.get('/', async (req, res) => {
  try {
    const BALLS = await GOLFBALLS.find();
    res.status(200).json(BALLS);
  } catch (error) {
    res.status(500).json('All Ball Error');
  }
});

ROUTER.get('/:id', async (req, res) => {
  const ID = req.params.id;
  const BALL = await GOLFBALLS.findOne({ _id: ID });

  res.status(200).json(BALL);
});

// CREATE
ROUTER.post('/create', async (req, res) => {
  try {
    const NEW_BALL = req.body;
    const CREATE_RES = await GOLFBALLS.create(NEW_BALL);

    res.status(200).json(CREATE_RES);
  } catch (error) {
    console.error(error);
    res.status(500).json('Cannot CREATE new ball.');
  }
});

// UPDATE
ROUTER.put('/update/:id', async (req, res) => {
  try {
    const ID = req.params.id;
    const UPDATED_BALL = req.body;

    const UPDATE_RESPONSE = await GOLFBALLS.findOneAndUpdate(
      { _id: ID },
      UPDATED_BALL,
      {
        new: true,
      },
    );

    res.status(200).json(UPDATE_RESPONSE);
  } catch (error) {
    console.error(error);
    res.status(500).json('Cannot UPDATE new ball.');
  }
});

// DELETE
ROUTER.delete('/delete/:id', async (req, res) => {
  const ID = req.params.id;

  const DELETE_RESPONSE = await GOLFBALLS.deleteOne({ _id: ID });

  DELETE_RESPONSE.deletedCount === 0
    ? res.status(500).json('Document NOT Deleted')
    : res.status(200).json('Deleted Document');
});

module.exports = ROUTER;

