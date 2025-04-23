const express = require('express')
const uploadImages = require('../controller/image.controller')

const routerImages = express.Router()

const uploadWithCloud = require('../middleware/multer')
routerImages.post('/upload', uploadWithCloud.single('file'), uploadImages)

module.exports = routerImages 