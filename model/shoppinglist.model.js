const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShoppingListSchema = new Schema({
    name: {type: String, required: true},
    amount: {type: Number}
}, {
    timestamps: true
});


const ShoppingList = mongoose.model('Shopping_list', ShoppingListSchema);

module.exports = ShoppingList;