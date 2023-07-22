const express = require('express')
const router = express.Router()

const upload = require('../middleware/uploadImage')
// const filenames=[]
const message = ''
router.get('/', (req, res) => {
    const filenames = fs.readdirSync('public/images')
    // console.log(filenames);
    res.status(200).json({
        result: filenames
    })
})


router.post('/upload', upload.single('upload_file'), (req, res) => {
    const filenames = fs.readdirSync('public/images')
    console.log(filenames, "==filenames");
    // filenames.push(req.file.filename) 

    res.json({
        result: filenames
    })
    // console.log(req.file.filename);
})

module.exports = router


const fs = require('fs')
