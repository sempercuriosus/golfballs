// Declare required libs
const router = require('express').Router();
const golfballRoutes = require('./golfball-routes');

// USE API routes
router.use('/golfballs', golfballRoutes);

// Export Module
module.exports = router;
