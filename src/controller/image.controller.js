
const uploadImages = async (req, res) => {
    try {
        const image = req.file
        if (!image) {
            res.status(404).send({ message: "File is not found" })
        } else {
            res.status(200).send({
                url: image.path,
                filename: image.filename
            })
        }

    } catch (error) {
        console.log("", req.file);

        console.error("Upload lỗi:", error);
        console.log("req.file:", req.file);
        res.status(500).json({
            message: "Upload thất bại",
            error: error.message,
            stack: error.stack,
        });
    }
}

module.exports = uploadImages