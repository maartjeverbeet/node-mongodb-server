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

// Add a 'dummy' user (every time you require this file!)
const recipe = new Recipe({
    name: 'Joe',
    description: 'test',
    imagePath: 'test',
    ingredients:[ {
        "name": 'kaas',
        "amount": 20
    },
        {
            "name": 'peer',
            "amount": 50
        }]

}).save();

module.exports = Recipe;