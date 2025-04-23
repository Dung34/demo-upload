const express = require('express');
const routerImages = require('./src/routes/upload');
const app = express();
const bodyParser = require('body-parser')
// const multer = require('multer');

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads')
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname)
//     }
// })
// const upload = multer({ storage: storage })

const port = process.env.PORT || 3000; // Use environment variable or default to port 3000

app.use(bodyParser.json())

// app.use("/image", routerImages)
app.post('/', (req, res) => {
    res.send('hello world')
})

app.use('/image', routerImages)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
