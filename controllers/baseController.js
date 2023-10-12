const mongodb = require('../model/index.js');
// const ObjectId = require('mongodb').ObjectId;

const listRecipes = async (req,res)  => {
    const recipes = await mongodb.getDb().db('food').collection('restaurants').find();
    recipes.toArray().then((lists) => {
        res.setHeader('Contect-Type','application/json');
        res.status(200).json(lists);
    });
};

const addPlace = async (req, res) => {
    const place = {
        name: req.body.name,
        cuisine: req.body.cuisine,
        address: req.body.address,
        rating: req.body.rating,
        hours: req.body.hours
    }
    const response = await mongodb.getDb().db('food').collection('restaurants').insertOne(place);
    if (response.acknowledged) {
        res.status(201).json(response);
    } else {
        res.status(500).json(response.error || 'Some error occurred while adding a new restaurant.');
    }
}


module.exports = {listRecipes, addPlace};