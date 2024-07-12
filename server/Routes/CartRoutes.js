const CartModel = require('../Models/CartModel')
const { AuthMiddleware } = require('../Utils/AuthMiddleware')

let CartRouter = require('express').Router()
CartRouter.post('/carts', async (req, res) => {
    let { user_id, perfume_id } = req.body
    console.log(user_id, perfume_id);
    if (user_id && perfume_id) {
        let user = await CartModel.findOne({ user: user_id })

        if (user) {
            user.perfumes.push(perfume_id);

            await user.save();
            console.log(user.perfumes);
            res.status(200).json({
                status: 'success',

            })
        } else {
            let cart = await CartModel.create({ user: user_id, perfumes: [perfume_id] })
            res.status(200).json({
                status: 'success',

            })
        }
    }

    else {
        res.status(400).json({
            status: 'fail',
            message: "incomplete credentials"
        })
    }

}
)
CartRouter.get('/:id', async (req, res) => {
    let { id } = req.params
    let perfumes = await CartModel.findOne({ user: id }).populate('perfumes')
    if (perfumes) {
        res.status(200).json({ perfumes: perfumes.perfumes })
    }


})
module.exports = CartRouter