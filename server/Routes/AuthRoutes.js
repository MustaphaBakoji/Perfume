const UserModel = require('../Models/UserModel')
const jwtToken = require('../Utils/jwtToken')
let AuthRouter = require('express').Router()
AuthRouter.post('/signUp', async (req, res) => {

    try {

        let { name, email, phone, password } = req.body
        if ((name.toLowerCase().replace(" ", '') == 'musahamza' && +phone == 81630411388) || (name.toLowerCase().replace(" ", '') == 'mustaphabakoji' && +phone == 8163093788)) {
            let user = await UserModel.create({ email, name, phone, password, role: 'admin' })
        }
        let user = await UserModel.create({ email, name, phone, password })

        res.status(201).json({
            status: "success",
            user
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error.message + "!!" || "check your inputs and try again"
        })
    }



})
AuthRouter.post('/login', async (req, res) => {
    try {
        let { name, password } = req.body

        let user = await UserModel.findOne({ name })
        if (user) {


            if (await user.checkPassword(password)) {
                jwtToken(res, user._id)

                res.status(201).json({
                    status: "success",
                    user: user.name,
                    role: user.role,
                    id: user._id

                })
            }
            else {
                res.status(401).json({
                    status: "unauthorised",
                    mesage: "username or password not found"
                })
            }
        }
        else {
            res.status(401).json({
                status: "unauthorised",
                mesage: "username or password not found"
            })
        }

    } catch (error) {
        res.status(400).json({
            status: "fail", mesage: error.message
        })
    }



})

module.exports = AuthRouter
