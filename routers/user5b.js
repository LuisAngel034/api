/*const express=require('express');
const ruta=express.Router();
const user=require('../models/user5B');

//primer ruta para obtener el listado de usuarios
ruta.get('/api/users', async (req,res)=>{
    try{
        const lista=await user.find();
        res.json(lista);
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

//segunda ruta para insertar un usuario

ruta.post('/api/users', async (req,res)=>{
    const usuario=new user({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        telefono:req.body.telefono
    });
    try{
        const nuevousuario=await usuario.save();
        res.status(201).json(nuevousuario);
    }catch(err){
        res.status(400).json({message:err.message});
    }
});

//exportamos la ruta
module.exports=ruta;*/