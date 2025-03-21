const express = require('express');
const rutaProducto = express.Router();
const Productos = require('../models/productos.js');

rutaProducto.get('/api/consultsProducts', async (req, res) => {
    try {
        const lista = await Productos.find();
        res.json(lista);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = rutaProducto;