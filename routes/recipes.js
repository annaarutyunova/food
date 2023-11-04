const express = require('express');
const routes = express.Router();
const base = require('../controllers/baseController.js');
const validate = require('../validation.js');

routes.get('/', base.listRecipes)
routes.post('/', validate.postNewRecipe(), validate.checkNewRecipe, base.addRecipe)
routes.get('/:id', validate.checkRecipeId(), validate.checkNewRecipe, base.getRecipeById)
routes.put('/:id',  validate.updateRecipe(), validate.checkRecipeId(), validate.checkNewRecipe, base.updateRecipe)
routes.delete('/:id', validate.checkRecipeId(), validate.checkNewRecipe, base.deleteRecipe)

module.exports = routes;