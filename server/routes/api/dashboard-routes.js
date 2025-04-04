const ROUTER = require('express').Router();
const DASHBOARD_CONTROLLER = require('../../controllers/dashboard-controller');

// GET
ROUTER.get('/', (req, res) => {
  // test access
  res.status(418).json('No Coffee Here.');
});

ROUTER.get('/countGolfBalls', async (req, res) => {
  DASHBOARD_CONTROLLER.countAllBalls(res);
});

ROUTER.get('/topballs', async (req, res) => {
  DASHBOARD_CONTROLLER.getTopBalls(res);
});

ROUTER.get('/lifetimeBallAverage', async (req, res) => {
  DASHBOARD_CONTROLLER.lifetimeBallAverage(res);
});

module.exports = ROUTER;

