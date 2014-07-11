var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'MTG Deck Builder' });
});

/* GET Cardlist page. */
router.get('/cards/cardlist', function(req, res) {
    console.log('get /cardlist');
    
    // so test for color param
    console.log('colorparam is set to ' + req.query.color);
    
    var db = req.db;
    db.collection('creaturecards').find().toArray(function (err, items) {
        res.json(items);
    });
});

/* GET Colored cards listing. */
router.get('/cards/cardlist/:blue', function(req, res) {
    console.log('get /cardlist by color black');
    var color = req.params.rel.split(':')[1];
    console.log('querying for ' + color);
    var db = req.db;
    db.collection('creaturecards').find({color: '1'}).toArray(function (err, items) {
        res.json(items);
    });
});

module.exports = router;
