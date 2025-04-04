const GOLFBALLS = require('../models/golfballs');

// GET ALL BALLS
async function getAllBalls(res) {
  try {
    const BALLS = await GOLFBALLS.find();
    res.status(200).json(BALLS);
  } catch (error) {
    console.error(error);

    res.status(500).json('All Ball Error');
  }
}

// GET ONE BALL
async function getOneBall(req, res) {
  try {
    const ID = req.params.id;
    const BALL = await GOLFBALLS.findOne({ _id: ID });

    BALL === null
      ? res.status(404).json('Ball was not found')
      : res.status(200).json(BALL);
  } catch (error) {
    console.error(error);

    res.status(500).json('One Ball Error');
  }
}

// CREATE NEW BALL
async function createNewBall(req, res) {
  try {
    const NEW_BALL = req.body;
    const CREATE_RES = await GOLFBALLS.create(NEW_BALL);

    res.status(200).json(CREATE_RES);
  } catch (error) {
    console.error(error);
    res.status(500).json('Cannot CREATE new ball.');
  }
}

// UPDATE BALL DATA
async function updateExistingBall(req, res) {
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

    UPDATE_RESPONSE === null
      ? res.status(404).json('Ball was not found')
      : res.status(200).json(UPDATE_RESPONSE);
  } catch (error) {
    console.error(error);
    res.status(500).json('Cannot UPDATE new ball');
  }
}

// DELETE BALL
async function deleteExistingBall(req, res) {
  try {
    const ID = req.params.id;

    const DELETE_RESPONSE = await GOLFBALLS.deleteOne({
      _id: ID,
    });

    DELETE_RESPONSE.deletedCount === 0
      ? res.status(404).json('Could not locate document')
      : res.status(200).json('Deleted Document');
  } catch (error) {
    console.error(error);
    res.status(500).json('Document NOT Deleted');
  }
}
// EXPORT
module.exports = {
  getAllBalls,
  getOneBall,
  createNewBall,
  updateExistingBall,
  deleteExistingBall,
};

