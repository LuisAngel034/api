const express=require('express');
const ruta=express.Router();
const User=require('../models/users5B.js');

ruta.post('/api/auth', async (req,res)=>{
    try{
        console.log(req.body)
        let user=await User.findOne({correo:req.body.correo, pass:req.body.pass});
        if(!user){
            return res.status(200).json({message:'Usuario no encontrado', status:false});
        }
        return res.status(200).json({user, status:true});
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

module.exports=ruta