const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShoppingListSchema = new Schema({
    ingrediënt: [{
        name: String,
        amount: Number
    }]
}, {
    timestamps: true
});


const ShoppingList = mongoose.model('Shopping_list', ShoppingListSchema);

module.exports = ShoppingList;