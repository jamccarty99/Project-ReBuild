const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
  
  itemNumber: Number,
  imageURL: String,
  room: String,
  brand: String,
  model: String,
  title: String,
  itemYr: Number,
  itemMo: Number,
  cost: Number
})

module.exports = mongoose.model('Product', ProductSchema)