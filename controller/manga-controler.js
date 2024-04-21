const Manga = require('../model/manga');

const getMangas = async (req,resp)=>{

    try {
        const mangas = await Manga.find({});
        if (!mangas) {
            return resp.status(404).json({
                ok: false,
                mensaje: 'No se encontraron mangas',
            });
        }

        resp.json({
             mangas,
        });
    } catch (error) {
        console.error('Error al obtener los mangas:', error);
        resp.status(500).json({
            ok: false,
            mensaje: 'Error al obtener los mangas',
        });
    }
}

const crearManga = async (req,resp)=>{

    const manga = new Manga(req.body);

    await manga.save();

    resp.json({
        ok:true,
        manga
    })
}


module.exports = {
    getMangas,
    crearManga
}