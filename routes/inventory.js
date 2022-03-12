// File name: routes/inventory.js
// Student name: Syeda Fawal
// Student Id: 301155522
// Date: March 12, 2022

let express = require('express');
let router = express.Router();


//connect to our model
let inventoryController = require('../controllers/inventory');

/* GET list. */
router.get('/list', inventoryController.list); 

// Get method to Render the Add Items Page
router.get('/add', inventoryController.displayAddPage);
// Post method to handle the Add Items process
router.post('/add', inventoryController.processAddPage);

// Get method to Render the update Items Page
router.get('/update/:id', inventoryController.displayEditPage);
// Post method to handle the update Items process
router.post('/update/:id', inventoryController.processEditPage);

// Precess Delete items
router.get('/delete/:id', inventoryController.performDelete);


module.exports = router;