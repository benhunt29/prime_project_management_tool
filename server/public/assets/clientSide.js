/**
 * Created by Shawn on 8/26/15.
 */
var express = require('express');
var chance = require('chance'),
	chance = new Chance();
var router = express.router();

// router methods
router.get('/', function (req, res, next) {
	var num = chance.integer({min: 10, max: 60});
	console.log('Client Side Points: '+ num);
	res.send(num);
});

module.exports = router;