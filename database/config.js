const mongoose = require('mongoose');


const dbConexion = async () =>{

    try {
        mongoose.connect('mongodb+srv://Mery:mangaList86@mangalistcluster.9yvjanb.mongodb.net/MangasDB');
console.log("DB ONLINE");
    } catch (error) {
        console.log(error);
        throw new Error('Error a la conexion a la BD');
    }


}


module.exports =  {
    dbConexion
}