const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    Apaterno: {
        type: String,
        required: true
    },
    Amaterno: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true,
        unique: true
    },
    telefono: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        required: true
    },
    Pregunta: {
        type: String,
        
    },
    respuesta: {
        type: String,
        
    },
    pass: {
        type: String,
        required: true
    }
});

console.log('users5B.js');

module.exports = mongoose.model('users', userSchema);