const express = require('express');
const ruta = express.Router();
const Sensores = require('../models/senai.js');

// 1. Endpoint para consultar datos del invernadero (existente)
ruta.post('/api/sensoresDatos', async (req, res) => {
  try {
    console.log(req.body);
    let sensor = await Sensores.findOne({ numero_serie: req.body.numero_serie });
    if (!sensor) {
      return res.status(200).json({ message: 'Invernadero no encontrado', status: false });
    }
    return res.status(200).json({ sensor, status: true });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 2. Endpoint para actualizar el ventilador
ruta.put('/api/actualizar/ventilador', async (req, res) => {
  try {
    const { numero_serie, estado } = req.body; // Se espera un JSON con numero_serie y estado

    // Validaciones mejoradas
    if (!numero_serie || typeof estado !== 'boolean') {
      return res.status(400).json({
        success: false,
        message: 'Se requieren numero_serie (string) y estado (boolean)'
      });
    }

    // Actualizar en MongoDB
    const resultado = await Sensores.findOneAndUpdate(
      { numero_serie: numero_serie },
      { $set: { actVentilador: estado } },
      { new: true }
    );

    if (!resultado) {
      return res.status(404).json({
        success: false,
        message: 'Invernadero no encontrado'
      });
    }

    res.json({
      success: true,
      message: 'Ventilador actualizado',
      data: {
        numero_serie: resultado.numero_serie,
        actVentilador: resultado.actVentilador,
        updatedAt: resultado.updatedAt
      }
    });

  } catch (err) {
    console.error('Error al actualizar ventilador:', err);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor',
      error: err.message
    });
  }
});

// Endpoint para actualizar la bomba de agua
ruta.put('/api/actualizar/bomba', async (req, res) => {
  try {
    const { numero_serie, estado } = req.body;

    // Validaciones mejoradas
    if (!numero_serie || typeof estado !== 'boolean') {
      return res.status(400).json({
        success: false,
        message: 'Se requieren numero_serie (string) y estado (boolean)'
      });
    }

    // Actualizar en MongoDB
    const resultado = await Sensores.findOneAndUpdate(
      { numero_serie: numero_serie },
      { $set: { actBombaAgua: estado } },
      { new: true }
    );

    if (!resultado) {
      return res.status(404).json({
        success: false,
        message: 'Invernadero no encontrado'
      });
    }

    res.json({
      success: true,
      message: 'Bomba de agua actualizada',
      data: {
        numero_serie: resultado.numero_serie,
        actBombaAgua: resultado.actBombaAgua,
        updatedAt: resultado.updatedAt
      }
    });

  } catch (err) {
    console.error('Error al actualizar bomba:', err);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor',
      error: err.message
    });
  }
});

module.exports = ruta;