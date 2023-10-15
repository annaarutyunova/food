const mongodb = require('../model/index.js');
const ObjectId = require('mongodb').ObjectId;

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
const getById = async (req, res) => {
    const id = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db('food').collection('restaurants').find({ _id: id });
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
    });
};

const updatePlace = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    // be aware of updateOne if you only want to update specific fields
    const body = {
        name: req.body.name,
        cuisine: req.body.cuisine,
        address: req.body.address,
        rating: req.body.rating,
        hours: req.body.hours
    };
    const response = await mongodb
      .getDb()
      .db('food')
      .collection('restaurants')
      .replaceOne({ _id: userId }, body);
    console.log(response);
    if (response.modifiedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json(response.error || 'Some error occurred while updating the restaurant.');
    }
};

const deletePlace = async (req, res) => {
    const userId = new ObjectId(req.params.id);
  const response = await mongodb.getDb().db('food').collection('restaurants').remove({ _id: userId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the contact.');
  }
};


module.exports = {listRecipes, addPlace, getById, updatePlace,deletePlace};