'use strict'

module.exports = (app) => {
    const fileController = require('../controllers/file.controller')

    app.use(require('connect-busboy')())

    app.route('/file')
        .get(fileController.list)
        .post(fileController.upload)

    app.route('/file/:fileName')
        .get(fileController.download)
}