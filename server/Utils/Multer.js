let Multer = require("multer")


let storage = Multer.memoryStorage()

exports.MulterUploads = Multer({ storage }).single('image')