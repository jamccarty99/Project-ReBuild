const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FormSchema = new Schema({
  category: String,
  name: String
 
  
})

module.exports = mongoose.model('Product', FormSchema)