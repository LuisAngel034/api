const mongoose = require('mongoose');

const SenActInvSchema = new mongoose.Schema({
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
        ref: 'Categoria' // Asegúrate de que 'Categoria' sea el nombre correcto de la colección referenciada
    },
    imgPortada: {
        type: String,
    },
    imgDetalles: {
        type: [String],
    },
}, { timestamps: true });

module.exports = mongoose.model('productos', SenActInvSchema);