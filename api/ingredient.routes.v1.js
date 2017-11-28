var express = require('express');
var routes = express.Router();
var mongodb = require('../config/mongo.db');
var Ingredient = require('../model/ingredient.model');

routes.get('/ingredients', function(req, res) {
    res.contentType('application/json');
    Ingredient.find({})
        .then((ingredients) => {
            // console.log(recipes);
            res.status(200).json(ingredients);
        })
        .catch((error) => res.status(401).json(error));
});



routes.post('/ingredients', function(req, res, next) {
    const ingredientReq = req.body;
    Ingredient.create(ingredientReq)
        .then(ingredient => res.send(ingredient))
        .catch(next);
});



routes.put('/ingredients/:id', function(req, res, next) {
    const ingredientId = req.params.id;
    const ingredientP = req.body;

    Ingredient.findByIdAndUpdate({ _id: ingredientId},ingredientP)
        .then(()=> Ingredient.findByIdAndUpdate({ _id: ingredientId}))
        .then(ingredient => res.send(ingredient))
        .catch(next);
});



routes.delete('/ingredients/:id', function(req, res, next) {
    const ingredientId = req.params.id;

    Ingredient.findByIdAndRemove({_id: ingredientId})
        .then(ingredient=>res.status(204).send(ingredient))
        .catch(next);
});