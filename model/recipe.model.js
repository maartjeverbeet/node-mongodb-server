const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const ShoppinglistSchema = require('./shoppinglist.model');

const RecipeSchema = new Schema({
    name: {type: String, required: true},
    id: {type: Number},
    description: String,
    imagePath: String,
    ingredients: {type:[{
        name: {type: String, required: true},
        amount: {type: Number, required: true}
    }],required:true}
}, {
    timestamps: true
});


const Recipe = mongoose.model('recipe', RecipeSchema);

module.exports = Recipe;