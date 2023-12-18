//Imporat erl modelo el usuario

const User = require('../models/Users')
const passport = require("passport")



//Mostrar el formulario de resgitro
const renderRegisterForm =(req,res)=>{
    res.render('user/registerForm')
}


//Capturar los datos del formulario y almacernar en BDD
const registerNewUser = async(req,res)=>{
    
    const{name,email,password,confirmpassword} = req.body
    
    if (Object.values(req.body).includes("")) return res.send("Lo sentimos, debes llenar todos los campos")

    if(password != confirmpassword) return res.send("Lo sentimos, los passwords no coinciden")

    const userBDD = await User.findOne({email})
    if(userBDD) return res.send("Lo sentimos, el email ya se encuentra registrado")
    const newUser = await new User({name,email,password,confirmpassword})
    newUser.password = await newUser.encrypPassword(password)
    newUser.save()
    res.redirect('/user/login')
}



//Mostrar el formulario de login
const renderLoginForm =(req,res)=>{
    res.render('user/loginForm')
}


//capturar los datos del formulario y realizar el porceso de login en conjunto en BDD
// Segunda forma utilizando el módulo passport
const loginUser = passport.authenticate('local',{
    failureRedirect:'/user/login',
    successRedirect:'/portafolios'
})


//Cerrar la sesion
const logoutUser =(req,res)=>{
    req.logout((err)=>{
        if (err) return res.send("Ocurrio un error") 
        res.redirect('/');
    });
}

//importar

module.exports={
    renderRegisterForm,
    registerNewUser,
    renderLoginForm,
    loginUser,
    logoutUser
}