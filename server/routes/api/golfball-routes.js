// Declare Lib & Model
const router = require('express').Router();
const Golfballs = require('../../models/golfballs');

// GET
router.get('/', async (req, res) => {
  res.status(200).json('This was successful!');
});

router.post('/create', async (req, res) => {
  console.log(req.body);

  res.status(200).json(req.body);
});

router.put('/update/:id', async (req, res) => {
  res.status(200).json('ID Sent ' + req.params.id);
});

module.exports = router;

