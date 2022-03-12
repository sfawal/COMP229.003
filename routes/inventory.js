// File name: routes/inventory.js
// Student name: Syeda Fawal
// Student Id: 301155522
// Date: March 12, 2022

let express = require('express');
let router = express.Router();
//connect to our model
let inventoryController = require('../controllers/inventory');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        req.session.url = req.originalUrl;
        return res.redirect('/users/login');
    }
    next();
}

/* GET list. */
router.get('/list', inventoryController.list); 

// Get method to Render the Add Items Page
router.get('/add',requireAuth, inventoryController.displayAddPage);
// Post method to handle the Add Items process
router.post('/add',requireAuth, inventoryController.processAddPage);

// Get method to Render the update Page
router.get('/update/:id',requireAuth, inventoryController.displayEditPage);
// Post method to handle the update process
router.post('/update/:id',requireAuth, inventoryController.processEditPage);

// Precess Delete contacts
router.get('/delete/:id',requireAuth, inventoryController.performDelete);


module.exports = router;