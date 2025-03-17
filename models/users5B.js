const mongoose = require('mongoose');

const user5bschema= new mongoose.Schema({
    _id:{
        type:String,
    },
    nombre:{
        type:String,
        required:true
    },
    Apaterno:{
        type:String,
        required:true,
        unique:true
    },
    Amaterno:{
        type:String,
        required:true
    },
    correo:{
        type:String,
        required:true
    },
    telefono:{
        type:String,
        required:true
    },
    contraseña:{
        type:String,
        required:true,
        unique:true
    },
    rol:{
        type:String,
        required:true
    },
    pregunta:{
        type:String,
        required:true
    },
    respuesta:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('USERS',user5bschema);