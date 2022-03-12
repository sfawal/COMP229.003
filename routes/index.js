// File name: index.js
// Student name: Syeda Fawal
// Student Id: 301155522
// Date: March 12

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(
    'home', 
    { 
      title: 'Home',
      userName: req.user ? req.user.username : ''
    });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render(
    'about', 
    { 
      title: 'About Page',
      userName: req.user ? req.user.username : ''
    });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render(
    'projects', 
    { 
      title: 'Projects Page',
      userName: req.user ? req.user.username : '' 
    });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render(
    'services', 
    { 
      title: 'Services Page',
      userName: req.user ? req.user.username : '' 
    });
});

/* GET Contact me page. */
router.get('/contact', function(req, res, next) {
  res.render(
    'contact', 
    { 
      title: 'Contact Me',
      userName: req.user ? req.user.username : ''
    });
});

module.exports = router;
