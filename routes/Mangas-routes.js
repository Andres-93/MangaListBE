const {Router} = require('express');
const { getMangas,crearManga,actualizarUsuario,borrarManga } =require('../controller/manga-controler')

const router = Router();

router.get('/',getMangas);


router.post('/',crearManga);


router.put('/:id',actualizarUsuario)


router.delete( '/:id',borrarManga);



module.exports =  router;