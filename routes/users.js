var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/userlist', function(req, res) {
    var db = req.db;
    db.collection('creaturecards').find().toArray(function (err, items) {
        res.json(items);
    });
});

/*
 * POST to addcard.
 */
router.post('/addcard', function(req, res) {
    var db = req.db;
    db.collection('creaturecards').insert(req.body, function(err, result){
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});

module.exports = router;
