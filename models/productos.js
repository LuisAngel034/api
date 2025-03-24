const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
    },
    descripcion: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
        min: 0,
    },
    cantidad: {
        type: Number,
        required: true,
        min: 0,
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