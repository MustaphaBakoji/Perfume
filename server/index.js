const express = require('express')
const app = express()
const port = process.env.PORT || 4000
let dotenv = require('dotenv')
let cors = require('cors')
app.use(cors())
app.use(express.urlencoded({ extended: true }));

const AuthRouter = require('./Routes/AuthRoutes'),
    cookieParser = require("cookie-parser")
dotenv.config()
app.use(express.json())
app.use(cookieParser())
const mongoose = require('mongoose');
const PerfsRoute = require('./Routes/PerfsRoute')
let cloudinary = require('cloudinary').v2

mongoose.connect(process.env.LocalDb).then(console.log("sucessfull")).catch((e) => {
    console.log("erro is ", e);
});

cloudinary.config({
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
    cloud_name: process.env.CLOUDINARY_NAME
})
app.get('/', (req, res) => { res.send("mustapha bakoji dnndndnnnn ,mad") })
app.use('/api/auth', AuthRouter)
app.use('/api/perfumes', PerfsRoute)
app.listen(port, () => console.log(`Example app listening at http://localhost:4000`))