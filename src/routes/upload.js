const express = require('express')
const uploadImages = require('../controller/image.controller')
const cloudinary = require('../config/cloudinary.config')
const { CloudinaryStorage } = require('multer-storage-cloudinary')
const multer = require('multer')
const routerImages = express.Router()

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "clinic_images",
        format: "jpg"
    }
})
const upload = multer({ storage: storage })
routerImages.post('/upload', upload.single('image'), uploadImages)

module.exports = routerImages 