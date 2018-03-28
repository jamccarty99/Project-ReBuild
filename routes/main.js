const router = require('express').Router()
//const faker = require('faker')
const Product = require('../models/Product')


module.exports = router;

//POST-FORM- Create a new form in the database
//POST-ITEM- Create a new item to be added to a form
//GET-FORMS Gets all the forms for a specific user their id
//GET-FORM Gets a specific form by id
//PUT-ITEM updates info on an item
//PUT-FORM updates info on a form...might be covered by put-item
//DELETE-FORM Deletes a form by id
//DELETE-ITEM Deletes an item by id