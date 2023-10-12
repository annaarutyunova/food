const mongodb = require('../model/index.js');
const ObjectId = require('mongodb').ObjectId;

const listRecipes = async (req,res)  => {
    const recipes = await mongodb.getDb().db('food').collection('restaurants').find();
    recipes.toArray().then((lists) => {
        res.setHeader('Contect-Type','application/json');
        res.status(200).json(lists);
    });
    // res.send("Hi Anna");
};


module.exports = {listRecipes};