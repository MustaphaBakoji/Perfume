let jwt = require("jsonwebtoken")
const UserModel = require("../Models/UserModel")

let AuthMiddleware = (req, res, next) => {
    try {
        let token = req.cookies()
        if (token) {

            token = jwt.verify(token, process.env.SECRET_KEY)
            let user = UserModel.findById(token.id)
            req.user = user

            console.log("dfd", user);
            next()
        }
        res.status(401).json({
            status: "un_authorised"
        })
    } catch (error) {
        res.status(401).json({
            status: "un_authorised"
        })
    }
}
module.exports = AuthMiddleware