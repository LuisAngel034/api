const mongoose = require('mongoose');

const CategoriaProductsSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    nombre: {
        type: String,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('categoriaproductos', CategoriaProductsSchema);