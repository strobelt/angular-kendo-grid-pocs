'use strict'

const mongoose = require('mongoose'),
    Product = mongoose.model('Products')

exports.list_all_products = (req, res) =>
    Product.find({}, (err, products) => {
        if (err)
            res.send(err)
        res.json(products)
    })


exports.create_product = (req, res) =>
    new Product(req.body).save((err, product) => {
        if (err)
            res.send(err)
        res.json(product)
    })

exports.read_product = (req, res) =>
    Product.findById(req.params.productId, (err, product) => {
        if (err)
            res.send(err)
        res.json(product)
    })

exports.update_product = (req, res) =>
    Product.findOneAndUpdate({ _id: req.params.productId }, req.body, (err, product) => {
        if (err)
            res.send(err)
        res.json(product)
    })

exports.delete_product = (req, res) =>
    Product.findOneAndRemove({ _id: req.params.productId }, (err, product) => {
        if (err)
            res.send(err)
        res.json({ message: 'Product deleted successfully' })
    })