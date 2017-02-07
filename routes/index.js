var express = require('express');
var router = express.Router();


var downloads = [
        {pagetitle:'title', description:'the description'},
        {pagetitle:'title', description:'the description'},
        {pagetitle:'title', description:'the description'}
    ]

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: downloads });
});

module.exports = router;
