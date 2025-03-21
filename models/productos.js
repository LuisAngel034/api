const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    categoria: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Categoria',
    },
    imgPortada: {
        type: String,
    },
    imgDetalles: {
        type: [String],
    },
}, { timestamps: true });

module.exports = mongoose.model('productos', ProductsSchema);