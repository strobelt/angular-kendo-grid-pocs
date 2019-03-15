var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Product = require('./models/product.model'),
    File = require('./models/file.model'),
    bodyParser = require('body-parser')

// mongoose instance connection url connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/ProductsDb', { useNewUrlParser: true })

var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', '*')
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
    next()
}
app.use(allowCrossDomain)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var productRoutes = require('./routes/product.routes')
productRoutes(app)

var fileRoutes = require('./routes/file.routes')
fileRoutes(app)


app.listen(port)

console.log('API listening on port ' + port)