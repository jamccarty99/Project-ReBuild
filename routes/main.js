const router = require('express').Router()
const Product = require('../models/Product')
const Report = require('../models/Report')

// POST /products: Creates a new product in the database
router.post('/products', (req, res, next) => {
    let product = new Product()

    product.itemNumber= Number,
    product.imageURL= String,
    product.room= String,
    product.brand= String,
    product.model= String,
    product.title= String,
    product.itemYr= Number,
    product.itemMo= Number,
    product.cost= Number,
    product.save((err) => {
      if (err) throw err
    })
  res.send(product)
})

// POST /reports: Creates a new report in the database
router.post('/reports', (req, res, next) => {
    let report = new Report()

    report.reportId = Number,
    report.userId = String,
    report.total = Number,
    report.products =
    product.save((err) => {
      if (err) throw err
    })
  res.send(product)
})

//GET /products: Gets all the products by ReportId
router.get('/products', (req, res, next) => {
        Rebuild.findOne({_id: req.params.product}).
        exec((error, products) => {
            res.send(products)
        })
})

// DELETE /products/:product: Deletes a product by id
router.delete('/products/:product', (req, res, next) => {
    Rebuild.findByIdAndRemove({_id: req.params.product}, (err, products) => {
        if (err) throw err;
        res.send(products)
    })
})

module.exports = router;

//POST-FORM- Create a new form in the database
//POST-ITEM- Create a new item to be added to a form
//GET-FORMS Gets all the forms for a specific user their id
//GET-FORM Gets a specific form by id
//PUT-ITEM updates info on an item
//PUT-FORM updates info on a form...might be covered by put-item
//DELETE-FORM Deletes a form by id
//DELETE-ITEM Deletes an item by id