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
const actualizarUsuario = async (req,resp)=>{

    const uid = req.params.id;

    try {

        const camposAct = req.body;

        const usuarioActualizado = await Manga.findByIdAndUpdate(uid,camposAct)

        resp.json({
            ok:true,
            usuarioActualizado
        })
      
    } catch (error) {
        console.error('Error al actualizar:', error);
        resp.status(500).json({
            ok: false,
            mensaje: 'Error al actualizar',
        });
    }

}

const borrarManga = async(req, res ) => {

    const uid = req.params.id;

    try {

      

        await Manga.findByIdAndDelete( uid );

        
        res.json({
            ok: true,
            msg: 'Manga eliminado'
        });

    } catch (error) {
        
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al borrar manga'
        });

    }


}



module.exports = {
    getMangas,
    crearManga,
    actualizarUsuario,
    borrarManga
}