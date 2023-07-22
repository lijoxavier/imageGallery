const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        const extension = file.originalname.split('.').pop()
        console.log(extension);
        cb(null, file.fieldname + '-' + uniqueSuffix + '.'+ extension)
    }
})

const upload = multer({ storage: storage })



module.exports = upload