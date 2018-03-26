const router = require('express').Router()
const faker = require('faker')
const Product = require('../models/product')
const {Review} = require('../models/review')


router.get('/generate-fake-data', (req, res, next) => {
  for (let i = 0; i < 90; i++) {
    let product = new Product()

    product.category = faker.commerce.department()
    product.name = faker.commerce.productName()
    product.price = faker.commerce.price()
    product.image = faker.image.image()
    product.reviews = []
    product.save((err, product) => {
      if (err) throw err
    })
    let review = new Review()

    review.userName = faker.internet.userName()
    review.text = faker.lorem.sentence()
    review.productId = product._id
    product.reviews.push(review)
    product.save((err, product) => {
        if (err) throw err
      })
  }
  res.end()
})

// We'll want to be able to pass in an optional query to return only the products of the passed in category.
// We'll want to be able to pass in another optional query to return the products, but sorted by price - either from highest to lowest, or vice versa.
router.get('/items', (req, res, next) => {
    let numProductsToSkip = 0;
    let sortByPrice = 'price';

    if (req.query.page && req.query.page > 0) {
        numProductsToSkip = (req.query.page -1)* 9;
    }
    if (req.query.price == 'highest') {
        sortByPrice = '-price';
    }
    if (req.query.category) {
        Product.where("category", req.query.category).
        limit(9).
        skip(numProductsToSkip).
        sort(sortByPrice).
        exec((error, categoryProducts) => {
            res.send(categoryProducts)
        })
    } else if (!req.query.category) {
        Product.find({}).
        limit(9).
        skip(numProductsToSkip).
        sort(sortByPrice).
        exec((error, products) => {
            res.send(products)
        })
    }
})

// GET /products/:product: Returns a specific product by it's id
router.get('/products/:product', (req, res, next) => {
    Product.findOne({_id: req.params.product}).
    exec((error, product) => {
        res.send(product)
    })
})

// POST /products: Creates a new product in the database
router.post('/products', (req, res, next) => {
    let product = new Product()

    product.category = faker.commerce.department()
    product.name = faker.commerce.productName()
    product.price = faker.commerce.price()
    product.image = 'https://www.oysterdiving.com/components/com_easyblog/themes/wireframe/images/placeholder-image.png'
    product.reviews = []
    product.save((err) => {
      if (err) throw err
    })
  res.send(product)
})
     
// DELETE /products/:product: Deletes a product by id
router.delete('/products/:product', (req, res, next) => {
    Product.findByIdAndRemove({_id: req.params.product}, (err, products) => {
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