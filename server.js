const amazon = require('amazon-product-api')
const mongoose = require('mongoose')
const express = require('express')
const keys = require('./config/keys');
const cors = require('cors')
require('./models/Users');
const bodyParser = require('body-parser')
const secret = require('./client/src/actions/secret')


mongoose.connect(keys.mongoURI)

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(cors())

const client = amazon.createClient({
  awsTag: secret.associateTag,
  awsId: secret.accessId,
  awsSecret: secret.secret
});

app.get('/amazon/:index', async (req, res) => {
  var products = await client.itemSearch({
    keywords: req.query.title,
    searchIndex: req.params.index,
    condition: req.params.condition,
    responseGroup: 'EditorialReview,ItemAttributes,OfferFull,Images,Similarities'
  })

  res.send(products);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('Node.js listening on port ' + PORT)
})


