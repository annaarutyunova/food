const routes = require('express').Router();
const base = require('../controllers/baseController.js');
// const model = require('../model/index.js')
routes.get('/', base.listRecipes);

module.exports = routes;