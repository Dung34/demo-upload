const cloudinary = require('../config/cloudinary.config')
const uploadImages = async (req, res) => {
    try {
        const image = req.file
        console.log(image)

        // const result = await cloudinary.uploader.upload(image)

        res.status(200).json({
            message: "Upload thanh cong",
        })
    } catch (error) {
        res.status(400).json({
            name: error.name,
            message: error.message
        })
    }
}

module.exports = uploadImages