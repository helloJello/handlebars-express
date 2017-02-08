var express = require('express');
var router = express.Router();


var downloads = [
        {pagetitle:'title1', description:'the description1'},
        {pagetitle:'title2', description:'the description2'},
        {pagetitle:'title3', description:'the description3'}
    ]

var artists = [
        {pagetitle:'artist1', description:'the description1'},
        {pagetitle:'artist2', description:'the description2'},
        {pagetitle:'artist3', description:'the description3'}  
]
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { albums: downloads, artists: artists });
});

module.exports = router;
