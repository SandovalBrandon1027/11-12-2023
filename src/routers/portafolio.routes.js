//IMPORTAR ROUTER DE EXPRESS
const{Router} = require('express')
const { renderPortafolioForm, createNewPortafolio, renderAllPortafolios, renderPortafolio, renderEditPortafolioForm, updatePortafolio, deletePortafolio } = require('../controllers/portafolio.controllers')


//INSTANCIA LA VARIABLE ROUTER
const router = Router()


    //RUTA PARA CARGAR LA VISTA DEL FORMULARIO
router.get('/portafolio/add', renderPortafolioForm)

 //RUTA PARA CAPRUTAR LOS DATOS DEL FROM Y GUARDAR EN BDD
router.post('/portafolio/add', createNewPortafolio)


//RUTA PARA EXPRESAR TODOS LOS PORTAFOLIOS
router.get('/portafolios', renderAllPortafolios)
//RUTA PARA PRESENTAR EL DETALLE DE UN PORTAFOLIO
router.get('/portafolio/:id', renderPortafolio)

//RUTA CPARA CAMBIAR LA VISTA DEL FORMULARIO
router.get('/portafolio/edit/:id', renderEditPortafolioForm)

//RUTA PARA CAPTURAR LOS DATOS DEL FROM Y GUARDAR EN BDD
router.put('/portafolio/edit/:id', updatePortafolio)
//RUTA PARA ELIMINAR EL FORMULARIO
router.delete('/portafolio/delete/:id', deletePortafolio)


module.exports = router