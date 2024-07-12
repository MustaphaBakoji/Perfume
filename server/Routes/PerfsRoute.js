const PerfumeModel = require('../Models/PerfumeModel')
const AuthMiddleware = require('../Utils/AuthMiddleware')
const Cloudinary = require('cloudinary').v2

const { MulterUploads } = require('../Utils/Multer')

let PerfsRoute = require('express').Router()
PerfsRoute.post('/addPerfume',
    AuthMiddleware.AuthMiddleware, AuthMiddleware.addPerfMiddleware,
    MulterUploads, async (req, res) => {

        try {
            const b64 = Buffer.from(req.file.buffer).toString("base64");
            let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
            let image = await Cloudinary.uploader.upload(dataURI, { folder: 'Perfumes' })
            let image_url = image.secure_url
            let { name, price, } = JSON.parse(req.headers.properties)
            let perfume = await PerfumeModel.create({ name, image_url, price })
            res.status(201).json({
                status: 'success',
                perfume: perfume.name

            })

        } catch (error) {
            res.status(400).json({
                status: 'fail',
                message: error.message || 'unable to upload image check the format and try agai!'
            })

        }

        //




    })
PerfsRoute.put('/update',

    async (req, res) => {

        try {

            let perfume = await PerfumeModel.findOneAndUpdate({ name: 'musk alarabi' }, { $set: req.body }, { new: true })
            res.status(201).json({
                status: 'success',
                perfume: perfume.price

            })

        } catch (error) {
            res.status(400).json({
                status: 'fail',
                message: 'can`t update'
            })

        }

        //




    })
PerfsRoute.get('/perfumes', async (req, res) => {
    let perfumes = await PerfumeModel.find()
    if (perfumes) {
        res.status(200).json({
            status: 'success',
            perfumes: perfumes
        })
    } else {
        res.status(400).json({
            status: 'fail',
            message: 'no perfumes'


        })
    }
})
module.exports = PerfsRoute