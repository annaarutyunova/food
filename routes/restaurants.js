const express = require('express');
const routes = express.Router();
const base = require('../controllers/baseController.js');

routes.get('/', base.listRecipes)
routes.post('/', base.addPlace)
routes.get('/:id', base.getById)

module.exports = routes;
