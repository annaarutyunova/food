const express = require('express');
const routes = express.Router();
const base = require('../controllers/baseController.js');
const validate = require('../validation.js');

routes.get('/', base.listRecipes)
routes.post('/', validate.postNew(), validate.checkNewData, base.addPlace)
routes.get('/:id', validate.checkId(), validate.checkNewData, base.getById)
routes.put('/:id',  validate.updatePlace(), validate.checkId(), validate.checkNewData, base.updatePlace)
routes.delete('/:id', validate.checkId(), validate.checkNewData, base.deletePlace)

// routes.post('/login', loginValidation, (req, res, next) => {
//     // your login code
//  });

module.exports = routes;
