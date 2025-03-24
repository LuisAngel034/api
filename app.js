require('dotenv').config();
const express=require('express');
const mongoose=require('mongoose');
const userRutes=require('./routers/auth.js');
const insertRutes=require('./routers/insertUsers.js');
const consultas=require('./routers/consults.js');
const consultasProductos=require('./routers/consultsProducts.js');
const consultasCategorias=require('./routers/consultsCategories.js');

//declaramos nuestra variable app para manejar express
const app=express();
const port=process.env.PORT||3000;

//creamos el midleware para que nuestra api maneje json
app.use(express.json());

//primer endtponit en raiz / 
app.get('/',(req,res)=>{
  res.send('Hola :)...');
})

//agregamos el endtpoint de la ruta usuarios 
app.use(userRutes);
app.use(insertRutes);
app.use(consultas);
app.use(consultasProductos);
app.use(consultasCategorias);

//creamos el listener del puerto
app.listen(port,()=>{
  console.log('La app esta corriendo en el puerto '+port+'...');
})

console.log(process.env.MONGO_URI)

//conectamos a mongo atlas 
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Conectado a MongoDB Atlas'))
  .catch((error) => console.error('Error conectando a MongoDB:', error));
  