const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    description: String,
    imagePath: String,
    Ingredients: [ShoppinglistSchema]
}, {
    timestamps: true
});


const User = mongoose.model('user', RecipeSchema);

// Add a 'dummy' user (every time you require this file!)
const user = new User({
    name: 'Joe',
}).save();

module.exports = User;