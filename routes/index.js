const routes = require('express').Router();
const restaurants = require('./restaurants');

routes.get('/', (req,res) => {
    res.send(req.oidc.isAuthenticated() ? 'Welcome Logged in' : 'Welcome Logged out')
});

routes.use('/restaurants', restaurants);

module.exports = routes;