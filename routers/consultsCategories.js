const express = require('express');
const rutaProducto = express.Router();
const Categorias = require('../models/categorias.js');

rutaProducto.get('/api/consultsCategories', async (req, res) => {
    try {
        const lista = await Categorias.find();
        if (lista.length === 0) {
            return res.status(404).json({ message: 'No se encontraron categorias.' });
        }
        res.json(lista);
    } catch (err) {
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
});


module.exports = rutaProducto;