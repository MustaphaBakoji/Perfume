let jwt = require("jsonwebtoken")
const UserModel = require("../Models/UserModel")

exports.AuthMiddleware = async (req, res, next) => {

    try {
        let token = req.cookies.jwt

        if (token) {

            token = jwt.verify(token, process.env.SECRET_KEY)

            req.user = await UserModel.findById(token.id)


            return next()
        }
        return res.status(401).json({
            status: "fail",
            message: 'unauthorised'
        })
    } catch (error) {
        res.status(401).json({
            status: "fail",
            message: 'unauthorised'
        })
    }
}
exports.addPerfMiddleware = (req, res, next) => {

    if (req.user.role === 'admin') {

        return next()

    }
    return res.status(401).json({
        status: "fail",
        messge: 'you are not allowed to visit this route because you are not admin'
    })

}
