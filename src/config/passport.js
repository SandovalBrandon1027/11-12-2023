//Importar passport
const passport = require('passport')

//Imoprar el modelo Users
const User = require('../models/Users')

//Establecer la estrategia
const LocalStrategy = require('passport-local').Strategy


//Implementar la estrategia local
passport.use(new LocalStrategy({
    //en base a email y password
    usernameField:'email',
    passwordField:'password'
    //funcion para realizar el inicio de sesion
},async(email,password,done)=>{

    //Buscar el modelo en base al email
    const userBDD = await User.findOne({email})
    //Verificar si existe el usuario
    if(!userBDD) return done("Lo sentimos, el email no se encuentra registrado",false,)
    //Desencriptar el password
    const passwordUser = await userBDD.matchPassword(password)

    if(!passwordUser) return done("Lo sentimos, los passwords no coinciden",false)
    //retornar el usuario
    return done(null,userBDD)
}))


//seriazar el usuario
passport.serializeUser((user,done)=>{
    done(null,user.id)
})


//deseralizar el usuario
passport.deserializeUser(async (id, done) => {
    const userDB  = await User.findById(id).exec();
    return done(null,userDB)
});