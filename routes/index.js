// File name: index.js
// Student name: Syeda Fawal
// Student Id: 301155522
// Date: March 12

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Page' });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects Page' });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services Page' });
});

/* GET Contact me page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

module.exports = router;
