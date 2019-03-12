'use strict'

module.exports = (app) => {
    const productController = require('../controllers/product.controller')

    // product routes
    app.route('/products')
        .get(productController.list_all_products)
        .post(productController.create_product)

    app.route('/products/:productId')
        .get(productController.read_product)
        .put(productController.update_task)
        .delete(productController.delete_product)
}