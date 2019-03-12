'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    id: ObjectId,
    name: String,
    supplierId: Number,
    categoryId: Number,
    quantityPerUnit: Number,
    unitPrice: Number,
    unitsInStock: Number,
    unitsOnOrder: Number,
    reorderLevel: Number,
    discontinued: Boolean,
    category: {
        categoryId: Number,
        categoryName: String,
        description: String
    },
    firstOrderedOn: Date
})

module.exports = mongoose.model('Products', ProductSchema)