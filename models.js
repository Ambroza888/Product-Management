const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/product_manager', {useNewUrlParser: true});


const ProductSchema = new mongoose.Schema({
  title:{type:String,required:true,minlength:4},
  price: {type:Number,required:true},
  imgUrl: String
},{timestamps:true})
const Product = mongoose.model('Product',ProductSchema);
module.exports = Product;