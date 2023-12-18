//Imporar router express

const {Router} = require('express')
const { renderRegisterForm, registerNewUser, renderLoginForm, loginUser, logoutUser } = require('../controllers/user.controller')
const { redirectIfAuthenticated } = require('../helpers/validate-auth')

//Instanciar la variable router
const router = Router()

//Ruta pra mostar el formulario y almacenar en la BDD
router.get('/user/register',renderRegisterForm)

//Ruta para capturar los datos del formulario 
router.post('/user/register',registerNewUser)

//ruta pra mostar el fortmulario del login
router.get('/user/login', redirectIfAuthenticated, renderLoginForm)

//ruta para capruta los datos del formulario y rtealizat el proceso de login conjunto a la BDD
router.post('/user/login',loginUser)


//Cierre de sesion
router.post('/user/logout',logoutUser)


module.exports =router