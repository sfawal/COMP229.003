// File name: routes/users.js
// Student name: Syeda Fawal
// Student Id: 301155522
// Date: March 12, 2022

var express = require('express');
var router = express.Router();
let userController = require('../controllers/user')

/* GET users listing. */
router.get('/', userController.user);

/* GET users listing. */
router.get('/syeda', userController.syeda);

// Sign-up
router.get('/signup', userController.renderSignup);
router.post('/signup', userController.signup);

// Sign-in
router.get('/login', userController.renderLogin);
router.post('/login', userController.login);

// Sign out
router.get('/signout', userController.signout);


module.exports = router;
