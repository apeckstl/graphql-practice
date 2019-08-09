var express = require('express');
var router = express.Router();
const cors = require('cors');
const { db } = require('../pgAdaptor.js');

router.get('/', cors(), function(req, res, next) {
    db.many('select * from book').then(list => {
        res.status(200);
        res.send(list);
    });
    res.status(500);
});

module.exports = router;
