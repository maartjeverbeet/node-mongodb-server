const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShoppinglistSchema = new Schema({
    name:{
        type: String,
        Required: [true, 'Name is required']
    },
    amount: Number
});