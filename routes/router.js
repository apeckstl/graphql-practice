var express = require('express');
var router = express.Router();
const cors = require('cors');

router.get('/', cors(), function(req, res, next) {
    res.send('API is working properly');
});

module.exports = router;
