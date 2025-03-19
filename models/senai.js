const mongoose = require('mongoose');

const SenActInvSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    usuario_id: {
        type: String,
        required: true
    },
    numero_serie: {
        type: String,
        required: true,
        unique: true
    },
    estado: {
        type: String,
        required: true,
        enum: ["vendido", "disponible"]
    },
    sensorHumedadSuelo: {
        type: Number,
    },
    sensorHumedadAmbiente: {
        type: Number,
    },
    sensorTemperatura: {
        type: Number,
    },
    sensorNivelAgua: {
        type: Number,
    },
    actVentilador: {
        type: Boolean,
        default: false
    },
    actBombaAgua: {
        type: Boolean,
        default: false
    },
}, { timestamps: true });

module.exports = mongoose.model('invernaderos', SenActInvSchema);