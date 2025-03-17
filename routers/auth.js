const express=require('express');
const ruta=express.Router();
const User=require('../models/user5B');

ruta.post('/api/auth', async (req,res)=>{
    try{
        let user=await User.findOne({correo:req.body.correo, pass:req.body.pass});
        if(!user){
            return res.status(404).json({message:'Usuario no encontrado'});
        }
        return res.status(200).json({user});
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

