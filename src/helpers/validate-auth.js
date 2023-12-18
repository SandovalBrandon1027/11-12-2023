

//Metodo para proteger las rutas y a la vez esta siendo exportada
module.exports.isAuthenticated = (req,res,next)=>{
    //SI existe un inicio de sesion
    if(req.isAuthenticated()){
        //continuar
        return next()
    }
    //Redireccionamiento
    res.redirect('/user/login')
}

//Redireccionar a la vista portafolios si el usuario ya inicio sesion
module.exports.redirectIfAuthenticated = (req, res, next)=>{
    if (req.isAuthenticated()) {
        return res.redirect('/portafolios');
    }
        return next();
}