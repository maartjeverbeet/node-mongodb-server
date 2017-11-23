const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const ShoppinglistSchema = require('./shoppinglist.model');

const RecipeSchema = new Schema({
    name: String,
    description: String,
    imagePath: String,
    ingredients: [{
        name: String,
        amount: Number
    }]
}, {
    timestamps: true
});


const Recipe = mongoose.model('recipe', RecipeSchema);

module.exports = Recipe;