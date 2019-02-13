// File Name : routes/admin.js
// Author Name : Michael ADAIKALARAJ
// Student Number : 300958145
// Date : Feb 12, 2019

let express = require('express');
let router = express.Router();

let adminController = require('../controller/admin');

// Get messages list - READ

router.get('/', adminController.displayMessages);

// Adding a messge
router.post('/', adminController.processMessage);

//delete a message
router.get('/delete/:id', adminController.deleteMessage);

module.exports = router;
