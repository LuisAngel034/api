import express from 'express';
import { Productos } from '../models/productos.js'; // Asegúrate de que la importación sea correcta

const ruta = express.Router();

ruta.get('/api/consultsProducts', async (req, res) => {
    try {
        const lista = await Productos.find(); // Devuelve todos los campos
        res.json(lista);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default ruta;