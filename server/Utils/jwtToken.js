let jwt = require("jsonwebtoken")
let jwtToken = (res, id) => {
    let token = jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: '5min' })
    res.cookie('jwt', token, { httpOnly: true, secured: true, maxAge: 20 * 60 * 60 })


}
module.exports = jwtToken 