var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'MTG Deck Builder' });
});

/* GET Cardlist page. */
router.get('/cards/cards', function(req, res) {
    console.log('get /cardlist');
    var db = req.db;
    db.collection('creaturecards').find().toArray(function (err, items) {
        res.json(items);
    });
});

module.exports = router;
