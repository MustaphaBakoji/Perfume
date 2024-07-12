let { Schema, model } = require("mongoose"),
    bcrpyt = require("bcryptjs")
let UserSchema = new Schema({
    name: {
        required: [true, "please provide a name"],
        type: String
    },
    email: {
        type: String,
        required: [true, "please provide a email"],
        unique: [true, "email already exist"]

    },
    password: {
        type: String,
        required: [true, "please provide  email"],
        min_length: 4

    },
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        enum: ['regular', 'admin'],
        default: 'regular'
    }

}, { timestamps: true })
UserSchema.pre("save",
    async function (next) {

        this.password = await bcrpyt.hash(this.password, 13)

        next()

    })
UserSchema.methods.checkPassword = async function (password) {
    let isPassword = await bcrpyt.compare(password, this.password)

    return isPassword
}
let UserModel = model("user", UserSchema)
module.exports = UserModel