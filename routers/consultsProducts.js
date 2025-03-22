const express = require('express');
const rutaProducto = express.Router();
const Productos = require('../models/productos.js');

rutaProducto.get('/api/consultsProducts', async (req, res) => {
    try {
        const lista = await Productos.find();
        if (lista.length === 0) {
            return res.status(404).json({ message: 'No se encontraron productos.' });
        }
        res.json(lista);
    } catch (err) {
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
});

rutaProducto.get('/api/consultsProducts/:id', async (req, res) => {
    try {
        const producto = await Productos.findById(req.params.id);
        if (!producto) {
            return res.status(404).json({ message: 'Producto no encontrado.' });
        }
        res.json(producto);
    } catch (err) {
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
});

module.exports = rutaProducto;