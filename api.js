// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Product = require('../models/product');

// Routes
router.get('/:id', function(req, res){
	console.log('Im hitting the router')
	// Product.findById(req.params.id).exec()
	// 	.then(function(result){
	// 		console.log('im getting the result', result)
	// 		res.send(result)
	// 	})
	// 	.catch(function(error){
	// 		console.log(error)
	// 	});
	Product.find({}, function (err, result){
		console.log(result);
		res.send(result);
	})
})

// Return router
module.exports = router;