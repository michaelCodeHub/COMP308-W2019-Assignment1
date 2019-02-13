let express = require('express');
let router = express.Router();

// File Name : routes/index.js
// Author Name : Michael ADAIKALARAJ
// Student Number : 300958145
// Date : Feb 12, 2019

let mainController = require('../controller/main');

/* GET home page. */
router.get('/', mainController.showIndexPage);

/* GET About page. */
router.get('/about', mainController.showAboutPage);

/* GET projects page. */
router.get('/projects', mainController.showProjectsPage);

/* GET services page. */
router.get('/services', mainController.showServicePage);

/* GET contact page. */
router.get('/Contact', mainController.showContactPage);

module.exports = router;
