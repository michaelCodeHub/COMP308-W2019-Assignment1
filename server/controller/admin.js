let express = require('express');
let router = express.Router();

//create reference to contactSchema model
let messageModel = require('../models/message');

let displayMessages = (req,res,next) => {
    messageModel.find((err, messageList) => {
        if(err){
            return console.error(err);
        }else{
            // console.log(contactList);
            res.render('admin/index', { 
                title: 'User Messages',
                messages: messageList 
            });
        }
    })};

let processMessage = (req,res,next) => {
    let newMessage = messageModel({
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "email": req.body.email,
        "number": req.body.number,
        "message": req.body.message
    });

    console.log(newMessage);
    
    messageModel.create(newMessage, (err, messageModel)=>{
        console.log(messageModel);
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect("/");
        }
    });
};

module.exports = {
    displayMessages,//getting all the contacts
    processMessage//redirting to add page
}