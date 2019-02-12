let express = require('express');
let router = express.Router();

let mainController = require('../controller/main');

/* GET home page. */
router.get('/', mainController.showIndexPage);

/* GET About page. */
router.get('/about', mainController.showAboutPage);

/* GET product page. */
router.get('/projects', mainController.showProjectsPage);

/* GET services page. */
router.get('/services', mainController.showServicePage);

/* GET contact page. */
router.get('/Contact', mainController.showContactPage);

module.exports = router;
