//cargar todas las variables de entorno
require('dotenv').config()

//IMPORTAR LA VARIAVLE APP

//  IMPORTAR EL METODO CONNECTION
const app = require('./server.js')

const  connection  = require('./database.js');

//ejecutar el metodo connection
connection()


//EJECUTAR EL SEVIDOR EN EL PUERTO 3000
app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`);
})


