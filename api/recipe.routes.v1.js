var express = require('express');
var routes = express.Router();
var mongodb = require('../config/mongo.db');
var Recipe = require('../model/recipe.model');

//Lijst van alle recepten
routes.get('/recipes', function(req, res) {
    res.contentType('application/json');
    Recipe.find({})
        .then((recipes) => {
            // console.log(recipes);
            res.status(200).json(recipes);
        })
        .catch((error) => res.status(401).json(error));
});

//Lijst van 1 specifiek recept
routes.get('/recipes/:id', function(req, res) {
    const recipeId = req.params.id;

    Recipe.findOne({_id: recipeId})
        .then((recipe) => {
            res.status(200).json(recipe);
        })
        .catch((error) => res.status(400).json(error));
});

//Recept toevoegen
routes.post('/recipes', function(req, res, next) {
    const recipeReq = req.body;
    Recipe.create(recipeReq)
        .then(recipe => res.status(200).send(recipe))
        .catch((error) => res.status(400).json(error))
});

//Recept wijzigen
routes.put('/recipes/:id', function(req, res, next) {
    const recipeId = req.params.id;
    const recipeP = req.body;

    Recipe.findByIdAndUpdate({ _id: recipeId},recipeP)
        .then(()=> Recipe.findByIdAndUpdate({ _id: recipeId}))
        .then(recipe => res.send(recipe))
        .catch((error) => res.status(400).json(error))

});

//Recept verwijderen
routes.delete('/recipes/:id', function(req, res, next) {
    const recipeId = req.params.id;

    Recipe.findByIdAndRemove({_id: recipeId})
        .then(recipe => res.status(204).send(recipe))
        .catch((error) => res.status(400).json(error))
});

module.exports = routes;