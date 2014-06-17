var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
    res.render('helloworld', { title: 'Hello, World!' })
});

/* GET Cardlist page. */
router.get('/cardlist', function(req, res) {
    var db = req.db;
    var collection = db.get('creaturecards');
    collection.find({},{},function(e,docs){
        res.render('cardlist', {
            "cardlist" : docs
        });
    });
});

/* GET Cardlist page. */
router.get('/black', function(req, res) {
    var db = req.db;
    var collection = db.get('creaturecards');
    collection.find({
        "black" : "1"
    },{},function(e,docs){
        res.render('cardlist', {
            "cardlist" : docs
        });
    });
});

/* GET Cardlist page. */
router.get('/blue', function(req, res) {
    var db = req.db;
    var collection = db.get('creaturecards');
    collection.find({
        "blue" : "1"
    },{},function(e,docs){
        res.render('cardlist', {
            "cardlist" : docs
        });
    });
});

/* GET Cardlist page. */
router.get('/green', function(req, res) {
    var db = req.db;
    var collection = db.get('creaturecards');
    collection.find({
        "green" : "1"
    },{},function(e,docs){
        res.render('cardlist', {
            "cardlist" : docs
        });
    });
});

/* GET Cardlist page. */
router.get('/red', function(req, res) {
    var db = req.db;
    var collection = db.get('creaturecards');
    collection.find({
        "red" : "1"
    },{},function(e,docs){
        res.render('cardlist', {
            "cardlist" : docs
        });
    });
});

/* GET Cardlist page. */
router.get('/white', function(req, res) {
    var db = req.db;
    var collection = db.get('creaturecards');
    collection.find({
        "white" : "1"
    },{},function(e,docs){
        res.render('cardlist', {
            "cardlist" : docs
        });
    });
});

module.exports = router;
