const {Router} = require('express');
const { getMangas,crearManga } =require('../controller/manga-controler')

const router = Router();

router.get('/',getMangas);


router.post('/',crearManga);








module.exports =  router;