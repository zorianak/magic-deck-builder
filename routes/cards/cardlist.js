var express = require('express');
var router = express.Router();

/* GET cards listing. */
router.get('/cards/cardlist', function(req, res) {
    console.log('get /cardlist');
    var db = req.db;
    db.collection('creaturecards').find().toArray(function (err, items) {
        res.json(items);
        console.log(items);
    });
});

/*
 * POST to addcard.
 */
router.post('/addcard', function(req, res) {
    console.log('post /addcard');
    var db = req.db;
    db.collection('creaturecards').insert(req.body, function(err, result){
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});

/*
 * DELETE to deletecard.
 */
router.delete('/deletecard/:id', function(req, res) {
    var db = req.db;
    var cardToDelete = req.params.id;
    db.collection('creaturecards').removeById(cardToDelete, function(err, result) {
        res.send((result === 1) ? { msg: '' } : { msg:'error: ' + err });
    });
});

/* GET black cards listing. */
router.get('/cards/cardlist/:black', function(req, res) {
    console.log('get /cardlist by color black');
    var db = req.db;
    db.collection('creaturecards').find({black: '1'}).toArray(function (err, items) {
        res.json(items);
    });
});

/* GET blue cards listing. */
router.get('/cards/cardlist/:blue', function(req, res) {
    console.log('get /cardlist by color blue');
    var db = req.db;
    db.collection('creaturecards').find({blue: '1'}).toArray(function (err, items) {
        res.json(items);
    });
});

/* GET green cards listing. */
router.get('/cards/cardlist/:green', function(req, res) {
    console.log('get /cardlist by color green');
    var db = req.db;
    db.collection('creaturecards').find({green: '1'}).toArray(function (err, items) {
        res.json(items);
    });
});

/* GET red cards listing. */
router.get('/cards/cardlist/:red', function(req, res) {
    console.log('get /cardlist by color red');
    var db = req.db;
    db.collection('creaturecards').find({red: '1'}).toArray(function (err, items) {
        res.json(items);
    });
});

/* GET white cards listing. */
router.get('/cards/cardlist/:white', function(req, res) {
    console.log('get /cardlist by color white');
    var db = req.db;
    db.collection('creaturecards').find({white: '1'}).toArray(function (err, items) {
        res.json(items);
    });
});

/* GET colorless cards listing. */
router.get('/cards/cardlist/:colorless', function(req, res) {
    console.log('get /cardlist which are colorless');
    var db = req.db;
    db.collection('creaturecards').find({ 
        black: {$exists: false},
        blue: {$exists: false},
        green: {$exists: false},
        red: {$exists: false},
        white: {$exists: false}
    }).toArray(function (err, items) {
        res.json(items);
    });
});



module.exports = router;
