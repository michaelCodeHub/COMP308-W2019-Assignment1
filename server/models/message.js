let mongoose = require('mongoose');

//create a model class
let messageShema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    number: Number,
    message: String
},
{
    collection: "message"
});

module.exports = mongoose.model('portfolio', messageShema);