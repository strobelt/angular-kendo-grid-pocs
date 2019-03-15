'use strict'

const fs = require('fs'),
    path = require('path'),
    appDir = path.dirname(require.main.filename),
    filesDir = path.join(appDir, 'files'),
    shortId = require('shortid'),
    mongoose = require('mongoose'),
    File = mongoose.model('File')

const getPath = (fileName) =>
    path.join(filesDir, fileName)

const generateSafePath = (fileName) =>
    getPath(generateSafeFileName(fileName))

const generateSafeFileName = (fileName) =>
    shortId.generate().concat(path.extname(fileName))

exports.upload = function (req, res) {
    req.pipe(req.busboy);
    req.busboy.on('file', function (_fieldName, file, fileName) {
        const filePath = generateSafePath(fileName)
        const fstream = fs.createWriteStream(filePath)
        fstream.on('close', () => {
            new File({
                originalFileName: fileName,
                fileName: path.basename(filePath)
            }).save((err, file) => {
                if (err)
                    res.send(err)
                res.status(200).send(file)
            })
        })
        file.pipe(fstream)
    })
}

exports.download = (req, res) =>
    res.download(getPath(req.params.fileName))

exports.list = (_req, res) =>
    File.find({}, (err, files) => {
        if (err)
            res.send(err)
        res.json(files)
    })