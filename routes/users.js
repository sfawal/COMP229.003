// File name: users.js
// Student name: Syeda Fawal
// Student Id: 301155522
// Date: March 05

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET syeda page. */
router.get('/syeda', function(req, res, next) {
  res.render(
    'users', 
    { 
      title: 'Users', 
      name: 'Syeda'
    }
  );
});

module.exports = router;
