let express = require('express');
let router = express.Router();

let adminController = require('../controller/admin');

// Get Contact list - READ

router.get('/', adminController.displayMessages);

// Adding a contact
router.post('/', adminController.processMessage);

module.exports = router;
