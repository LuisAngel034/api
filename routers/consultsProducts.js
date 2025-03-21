const express = require('express');
const ruta = express.Router();
const Productos = require('../models/productos.js');

ruta.post('/api/ProductosDatos', async (req, res) => {
  try {
    console.log(req.body);
    let productos = await Productos.findOne({ nombre: req.body.nombre });
    if (!productos) {
      return res.status(200).json({ message: 'productos no encontrados', status: false });
    }
    return res.status(200).json({ productos, status: true });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = ruta;