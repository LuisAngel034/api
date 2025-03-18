const express = require('express');
const rutaInsertUsers = express.Router();
const User = require('../models/users5B.js');

rutaInsertUsers.post('/api/insertUsers', async (req, res) => {
    try {
        console.log('Datos recibidos:', req.body); // Depuración: Verifica los datos recibidos

        const nuevoUsuario = new User({
            nombre: req.body.nombre,
            Apaterno: req.body.Apaterno,
            Amaterno: req.body.Amaterno,
            correo: req.body.correo,
            telefono: req.body.telefono,
            rol: 'usuario', // Asignar "usuario" por defecto
            "contraseña": req.body["contraseña"]
        });

        const usuarioGuardado = await nuevoUsuario.save();
        console.log('Usuario guardado:', usuarioGuardado); // Depuración: Verifica el usuario guardado

        return res.status(201).json({ status: true, data: usuarioGuardado });
    } catch (err) {
        console.error('Error al guardar el usuario:', err); // Depuración: Imprime el error
        res.status(500).json({ status: false, message: err.message });
    }
});

module.exports = rutaInsertUsers;