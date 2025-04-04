// Declare Lib & Model
const ROUTER = require('express').Router();
const GOLFBALLS = require('../../models/golfballs');
const GOLFBALL_CONTROLLER = require('../../controllers/golfball-controllers');

// GET
ROUTER.get('/', async (req, res) => {
  GOLFBALL_CONTROLLER.getAllBalls(res);
});

ROUTER.get('/:id', async (req, res) => {
  GOLFBALL_CONTROLLER.getOneBall(req, res);
});

// CREATE
ROUTER.post('/create', async (req, res) => {
  GOLFBALL_CONTROLLER.createNewBall(req, res);
});

// UPDATE
ROUTER.put('/update/:id', async (req, res) => {
  GOLFBALL_CONTROLLER.updateExistingBall(req, res);
});

// DELETE
ROUTER.delete('/delete/:id', async (req, res) => {
  GOLFBALL_CONTROLLER.deleteExistingBall(req, res);
});

module.exports = ROUTER;

