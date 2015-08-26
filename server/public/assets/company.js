/**
 * Created by Shawn on 8/26/15.
 */
var express = require('express');
var adjNoun = require('adj-noun');
var chance = require('chance'),
	chance = new Chance();
var router = express.router();

// router methods
router.get('/', function(req, res, next) {
	// use chance for random seed to make company name generation even more random
	adjNoun.seed(chance.integer({min: 0, max: 1000}));
	var name = adjNoun().join(' ');
	console.log('Requested company name.'+ name);
	res.send(name)
});

module.exports = router;