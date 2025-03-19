const express=require('express');
const ruta=express.Router();
const Sensores=require('../models/senai.js');

ruta.post('/api/sensoresDatos', async (req,res)=>{
    try{
        console.log(req.body)
        let sensor=await Sensores.findOne({numero_serie:req.body.numero_serie});
        if(!sensor){
            return res.status(200).json({message:'Usuario no encontrado', status:false});
        }
        return res.status(200).json({sensor, status:true});
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

module.exports=ruta


/*const express=require('express');
const rutaConsults=express.Router();
const Sensores=require('../models/senai.js');

//rutaConsults para obtener el listado de sensores
rutaConsults.get('/api/sensoresDatos', async (req,res)=>{
    try{
        const lista = await Sensores.find();
        res.json(lista);
    }catch(err){
        res.status(500).json({message:err.message});
    }
});


module.exports=rutaConsults;*/