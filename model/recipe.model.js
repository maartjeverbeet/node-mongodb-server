const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const ShoppinglistSchema = require('./shoppinglist.model');

const RecipeSchema = new Schema({
    name: String,
    description: String,
    imagePath: String
}, {
    timestamps: true
});


const Recipe = mongoose.model('recipe', RecipeSchema);

// Add a 'dummy' user (every time you require this file!)
const recipe = new Recipe({
    name: 'Joe',
    description: 'test',
    imagePath: 'test'
}).save();

module.exports = Recipe;