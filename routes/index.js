var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'MTG Deck Builder' });
});

/* GET Cardlist page. */
router.get('/cards/cardlist', function(req, res) {
    console.log('get /cardlist');
    
    var reqColor = req.query.color;
    var query = {};
    query[reqColor] = '1';
    console.log(query);
    
    // so test for color param
    console.log('colorparam is set to ' + reqColor);
    
    var db = req.db;
    if(reqColor !== undefined) {
        console.log('Color is defined.');
        
        db.collection('creaturecards').find(query).toArray(function (err, items) {
            console.log(items);
            res.json(items);
        });
        
    } else {
        console.log('Color is undefined');
        db.collection('creaturecards').find().toArray(function (err, items) {
            res.json(items);
        });
    }
});


module.exports = router;
