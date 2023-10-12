const routes = require('express').Router();
const base = require('../controllers/baseController.js');

routes.get('/', base.welcome);

module.exports = routes;