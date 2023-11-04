const routes = require('express').Router();
const restaurants = require('./restaurants');
const recipes = require('./recipes');

routes.get('/', (req,res) => {
    res.send(req.oidc.isAuthenticated() ? 'Welcome Logged in' : 'Welcome Logged out')
});

routes.use('/restaurants', restaurants);
routes.use('/recipes', recipes);

module.exports = routes;