const express = require('express');
const ruta = express.Router();
const SensoresArduino = require('../models/senai.js');

ruta.post('/api/sensoresArduino', async (req, res) => {
  try {
    const { numero_serie, sensorHumedadSuelo, sensorHumedadAmbiente, 
            sensorTemperatura, sensorNivelAgua } = req.body;
    
    // Validar campos requeridos
    if (!numero_serie) {
      return res.status(400).json({ message: 'Número de serie es requerido', status: false });
    }

    // Buscar y actualizar el documento
    const updated = await SensoresArduino.findOneAndUpdate(
      { numero_serie },
      {
        sensorHumedadSuelo,
        sensorHumedadAmbiente,
        sensorTemperatura,
        sensorNivelAgua,
        $set: { updateAt: new Date() } // Actualizar marca de tiempo
      },
      { new: true, runValidators: true } // Devolver el documento actualizado y validar
    );

    if (!updated) {
      return res.status(404).json({ message: 'Invernadero no encontrado', status: false });
    }

    return res.status(200).json({ 
      message: 'Datos actualizados correctamente',
      data: updated,
      status: true 
    });
    
  } catch (err) {
    console.error('Error al actualizar sensores:', err);
    res.status(500).json({ 
      message: 'Error interno del servidor',
      error: err.message 
    });
  }
});

module.exports = ruta;