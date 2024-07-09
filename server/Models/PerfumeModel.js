const mongoose = require('mongoose');

const PerfumeSchema = new mongoose.Schema({
    name: { type: String, unique: true, required: true },
    price: {
        type: Number,
        required: true
    },
    image_url: {
        type: String
    }
}, {
    timestamps: true,
});

const PerfumeModel = mongoose.model('Perfume', PerfumeSchema)

module.exports = PerfumeModel