const UserModel = require('../Models/UserModel')
const jwtToken = require('../Utils/jwtToken')
let AuthRouter = require('express').Router()
AuthRouter.post('/signUp', async (req, res) => {
    try {
        let { name, email, phone, password } = req.body
        let user = await UserModel.create({ email, name, phone, password })

        res.status(201).json({
            status: "sucess",
            user
        })
    } catch (error) {
        res.status(400).json({
            status: "fail", mesage: error.message
        })
    }



})
AuthRouter.post('/login', async (req, res) => {
    try {
        let { email, password } = req.body
        let user = await UserModel.findOne({ email })
        if (user) {
            console.log(user.checkPassword(password));

            if (await user.checkPassword(password)) {
                jwtToken(res, user._id)
                res.status(201).json({
                    status: "sucess",
                    user: user.name
                })
            }
            else {
                res.status(401).json({
                    status: "un authorised",
                    mesage: "user or password not found"
                })
            }
        }
        else {
            res.status(401).json({
                status: "un authorised",
                mesage: "user or password not found"
            })
        }

    } catch (error) {
        res.status(400).json({
            status: "fail", mesage: error.message
        })
    }



})
module.exports = AuthRouter
