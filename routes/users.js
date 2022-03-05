var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET julio page. */
router.get('/julio', function(req, res, next) {
  res.render(
    'users', 
    { 
      title: 'Users',
      name: 'Julio'
    }
  );
});

module.exports = router;
