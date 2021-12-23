//upload.js
const express = require('express');
const app = express();
const path = require('path');

const router = express.Router();
const upload = require('../middleware/uploadMiddleware');
const Resize = require('./ResizeImage');

router.get('/', async function (req, res) {
    await res.render('index');
});

router.post('/image', upload.single('image'), async function (req, res) {
    // folder upload
    const imagePath = path.join(__dirname, '/../public/images');
    // call class Resize
    const fileUpload = new Resize(imagePath);
    if (!req.file) {
        res.status(401).json({error: 'Please provide an image'});
    }
    const filename = await fileUpload.save(req.file.buffer);
    
    return res.status(200).json({ name: filename });
});

module.exports = router;
