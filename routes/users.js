var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/userlist', function(req, res) {
    console.log('get /userlist');
    var db = req.db;
    db.collection('creaturecards').find().toArray(function (err, items) {
        res.json(items);
    });
});

module.exports = router;
