// Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Schema
var productSchema = new Schema({
	customer_id: Number,
	customer_first_name: String,
	category_id: Number,
	category_name: String,
	number_purchased: Number
});

// Return model
module.exports = mongoose.model('Products', productSchema);
