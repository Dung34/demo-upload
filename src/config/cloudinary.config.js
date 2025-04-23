const cloudinary = require('cloudinary').v2;

// Configure cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "dmfuiqsu5",
    api_key: process.env.CLOUDINARY_API_KEY || '486191277687529',
    api_secret: process.env.CLOUDINARY_API_SECRET || 'eXV-Gx3lO9gdTAorXDsnjZWoHAc'
});

module.exports = cloudinary;