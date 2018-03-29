const mongoose = require('mongoose')
const {ProductSchema} = require('./Product')
const Schema = mongoose.Schema

const ReportSchema = new Schema({
  
  userId: String,
  total: Number,
  products: [ProductSchema]
})

module.exports = mongoose.model('Report', ReportSchema)