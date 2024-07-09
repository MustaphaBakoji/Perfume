const PerfumeModel = require('../Models/PerfumeModel')
const AuthMiddleware = require('../Utils/AuthMiddleware')
const Cloudinary = require('cloudinary').v2
const datauri = require('datauri')
const { MulterUploads } = require('../Utils/Multer')

let PerfsRoute = require('express').Router()
PerfsRoute.post('/upload', MulterUploads, async (req, res) => {

    try {
        const b64 = Buffer.from(req.file.buffer).toString("base64");
        let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
        let image = await Cloudinary.uploader.upload(dataURI, { folder: 'Perfumes' })
        let image_url = image.secure_url
        let { name, price, } = JSON.parse(req.headers.additionalData)

        PerfumeModel.create({ name, image_url, price })
    } catch (error) {
        console.log('errro', error.message);
    }

    // 


    res.json({ sucess: 'sucess' })

})
PerfsRoute.get('perfumes', async (req, res) => {
    let perfumes = await PerfumeModel.find()
    if (perfumes) {
        res.status(200).json({
            status: 'sucess',
            perfumes
        })
    } else {
        res.status(400).json({
            status: 'no_perfumes',

        })
    }
})
module.exports = PerfsRoute