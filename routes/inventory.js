let express = require('express');
let router = express.Router();


//connect to our model
let inventoryController = require('../controllers/inventory');

/* GET users listing. */
router.get('/',inventoryController.list ); 

module.exports = router;