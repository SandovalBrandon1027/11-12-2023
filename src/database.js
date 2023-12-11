require('dotenv').config()

const mongoose = require('mongoose')

//const MONGODB_URI = 'mongodb+srv://byrontosh:sistemas@cluster0.6e8zntc.mongodb.net/test'
const MONGODB_URI = 'mongodb://localhost:27017/portfolio'


//HACER LA CONEXCION A ALA BASE DE DATOS

console.log(process.env.DB_HOST)



connection = async()=>{
    try {
        //INVOCAR AL METODO CONNECT
         await mongoose.connect(MONGODB_URI)
        console.log("Database is connected")
    } catch (error) {
        //RESPUESTA DE LA PROMESA
        console.log(error);
    }
}
//EXPORATR EL METODO CONECTAR
module.exports = connection

