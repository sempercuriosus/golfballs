// Declare required libs
const router = require('express').Router();
const apiRoutes = require('./api');

// USE API routes
router.use('/api/v1', apiRoutes);

// Export Module
module.exports = router;

