const express = require('express');
const {dbConexion} = require('./database/config');
const cors = require('cors');
require('dotenv').config();


//creamos servidor express
const app = express();


//cors
app.use(cors());

// Lectura y parseo body
app.use(express.json());

//DB
dbConexion();

//Rutas
app.use('/api/mangas', require('./routes/Mangas-routes'));


0
app.listen(process.env.PORT, () =>{
    console.log("Servidor corriendo en puerto " + 3000)
});