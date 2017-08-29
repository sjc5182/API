// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var http = require('http');
var path = require('path');
var Product = require('./models/product');

// MongoDB
mongoose.connect('mongodb://localhost/rest_test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection'))

var newProduct = new Product({
	customer_id: 1,
	customer_first_name: "John",
	category_id: 1,
	category_name: "Bouquets",
	number_purchased: 15
})

newProduct.save(function(err){
	console.log("test error");
})

// View Engine
// Express
var app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api', require('./routes/api'));

app.get('/', function(req, res, next){
	res.render('product', {
	})
});

app.post('/result', function(req, res, next){
	res.render('result', {
		products: newProduct
	})
});

app.get('/date', function(req, res, next){
	res.render('date', {
	})
});

app.post('/quantity', function(req, res, next){
	console.log('submiting the order page',req.body)
	var value = req.body.date;
	console.log('get data inserting in:', value)
	res.render('quantity', {
		products: newProduct
	})
});

app.get('/customer', function(req, res, next){
	res.render('orderName', {
	})
});

app.post('/orders', function(req, res, next){
	console.log('submiting the order page',req.body)
	var value = req.body.name;
	console.log('get data inserting in:', value)
	res.render('orders', {
		products: newProduct
	})
});


// Start server
app.listen(3000);
console.log('API is running on port 3000');
