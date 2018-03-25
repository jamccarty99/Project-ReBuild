const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ItemSchema = new Schema({
  category: String,
  name: String,
  price: Number,
  image: String
  
})

module.exports = mongoose.model('Product', ProductSchema)