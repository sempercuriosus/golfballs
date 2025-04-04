// Declare required libs
const ROUTER = require('express').Router();
const GOLFBALL_ROUTES = require('./golfball-routes');
const DASHBOARD_ROUTES = require('./dashboard-routes');

// USE API routes
ROUTER.use('/golfballs', GOLFBALL_ROUTES);

// USE DASHBOARD ROUTES
ROUTER.use('/dashboard', DASHBOARD_ROUTES);

// Export Module
module.exports = ROUTER;

