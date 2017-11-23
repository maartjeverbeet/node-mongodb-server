//
// ./api/v1/recipe.routes.v1.js
//
//recipe
var express = require('express');
var routes = express.Router();
var mongodb = require('../config/mongo.db');
var Recipe = require('../model/recipe.model');

//
// Geef een lijst van alle users.
//
routes.get('/recipes', function(req, res) {
    res.contentType('application/json');
    Recipe.find({})
        .then((recipes) => {
            // console.log(recipes);
            res.status(200).json(recipes);
        })
        .catch((error) => res.status(401).json(error));
});

//
// Retourneer één specifieke users. Hier maken we gebruik van URL parameters.
// Vorm van de URL: http://hostname:3000/api/v1/users/23
//
routes.get('/recipes/:id', function(req, res) {
    const recipeId = req.params.id;

    Recipe.findOne({_id: recipeId})
        .then((recipe)=>{
            res.status(200).json(recipe);
        })
        .catch((error) => res.status(401).json(error));
});

//
// Voeg een user toe. De nieuwe info wordt gestuurd via de body van de request message.
// Vorm van de URL: POST http://hostname:3000/api/v1/users
//
routes.post('/recipes', function(req, res, next) {
    const recipeReq = req.body;
    Recipe.create(recipeReq)
        .then(recipe => res.send(recipe))
        .catch(next);
});

//
// Wijzig een bestaande user. De nieuwe info wordt gestuurd via de body van de request message.
// Er zijn twee manieren om de id van de users mee te geven: via de request parameters (doen we hier)
// of als property in de request body.
// 
// Vorm van de URL: PUT http://hostname:3000/api/v1/users/23
//
routes.put('/recipes/:id', function(req, res, next) {
    const recipeId = req.params.id;
    const recipeP = req.body;

    Recipe.findByIdAndUpdate({ _id: recipeId},recipeP)
        .then(()=> Recipe.findByIdAndUpdate({ _id: recipeId}))
        .then(recipe => res.send(recipe))
        .catch(next);

});

//
// Verwijder een bestaande user.
// Er zijn twee manieren om de id van de users mee te geven: via de request parameters (doen we hier)
// of als property in de request body.
// 
// Vorm van de URL: DELETE http://hostname:3000/api/v1/users/23
//
routes.delete('/recipes/:id', function(req, res, next) {
    const recipeId = req.params.id;

    Recipe.findByIdAndRemove({_id: recipeId})
        .then(recipe=>res.status(204).send(recipe))
        .catch(next);
});

module.exports = routes;