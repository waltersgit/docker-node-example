var express = require('express');
var router = express.Router();
var {redisClient, getAsync} = require('../db/redis.js');

/* GET home page. */
router.get('/',async function (req, res, next) {
    redisClient.set("foo", "bar");
    var val = await getAsync('foo');
    res.send({
        "name": "PETER",
        "redisTestValue": val
    })
});

module.exports = router;
