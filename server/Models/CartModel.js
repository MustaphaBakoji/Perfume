const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    perfumes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'perfume' }],

    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },

}, {
    timestamps: true,
});

const CartModel = mongoose.model('cart', CartSchema)

module.exports = CartModel