const express = require('express');
const {dbConexion} = require('./database/config');
const cors = require('cors');

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



app.listen(4000,"0.0.0.0", () =>{
    console.log("Servidor corriendo en puerto " + 3000)
});