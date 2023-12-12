const express = require('express')
//IMPORTACION DEL PATH 
const path = require('path');

const { engine }  = require('express-handlebars')
const methodOverride = require('method-override');


// Inicializaciones
//instanciar espress 
const app = express()




// Configuraciones 

//VARIABLES DE CONFIGURACION

// let port = 3000
app.set('port',process.env.port || 3000)
app.set('views',path.join(__dirname, 'views'))

// let views = "C:\\Users\\APLICACIONES WEB\\Desktop\\11-12-2023"

//ESTABLECER LAS CONFIGURACION EXTRAS
app.set('views',path.join(__dirname, 'views'))
app.engine('.hbs',engine({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname:'.hbs'
}))

app.set('view engine','.hbs')
// Middlewares 
//SERVIDOR VA A TRABAJAR CPN INFORMACION EN BASE

app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'))


// Variables globales

// Rutas, llamamos a nuestras rutas

app.use(require('./routers/index.routes'))
app.use(require('./routers/portafolio.routes'))



// Archivos estáticos


//DEFINIR ARCHIVOS ESTATICOS Y PUBLICOS 
app.use(express.static(path.join(__dirname,'public')))



//EXPORATAR LA VARIABLE APP
module.exports = app