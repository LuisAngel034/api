const express = require('express');
const rutaInsertUsers = express.Router();
const User = require('../models/users5B.js');

rutaInsertUsers.post('/api/insertUsers', async (req, res) => {
    try {
        const nuevoUsuario = new User({
            nombre: req.body.nombre,
            Apaterno: req.body.Apaterno,
            Amaterno: req.body.Amaterno,
            telefono: req.body.telefono,
            correo: req.body.correo,
            rol: 'cliente',
            pass: req.body.pass,
        });

        const usuarioGuardado = await nuevoUsuario.save();
        return res.status(201).json({ status: true, data: usuarioGuardado });
    } catch (err) {
        // Capturar el error de correo duplicado
        if (err.code === 11000 && err.keyPattern.correo) {
            return res.status(400).json({ status: false, message: 'El correo ya está registrado.' });
        }
        // Otros errores
        res.status(500).json({ status: false, message: err.message });
    }
});

module.exports = rutaInsertUsers;