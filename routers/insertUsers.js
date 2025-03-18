const express = require('express');
const rutaInsertUsers = express.Router();
const User = require('../models/users5B.js');

rutaInsertUsers.post('/api/insertUsers', async (req, res) => {
    try {
        const nuevoUsuario = new User({
            nombre: req.body.nombre,
            Apaterno: req.body.Apaterno,
            Amaterno: req.body.Amaterno,
            correo: req.body.correo,
            telefono: req.body.telefono,
            rol: 'usuario',
            "contraseña": req.body["contraseña"]
        });

        const usuarioGuardado = await nuevoUsuario.save();

        return res.status(201).json({ status: true, data: usuarioGuardado });
    } catch (err) {
        res.status(500).json({ status: false, message: err.message });
    }
});

module.exports = rutaInsertUsers;