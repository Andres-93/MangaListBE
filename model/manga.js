const {Schema, model} = require('mongoose');


const MangaSchema = Schema({
    link:{
        type: String,

    },
    link2:{
        type: String,
    },
    urlFoto:{
        type: String,

    },
    titulo:{
        type: String,

    },
    descripcion:{
        type: String,
    },
    estado:{
        type: String,

    }

});

module.exports = model('Manga',MangaSchema );

