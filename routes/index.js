const routes = require('express').Router();
const restaurants = require('./restaurants');

routes.get('/', (req,res) => {
    res.send("Welcome")});

routes.use('/restaurants', restaurants);

module.exports = routes;