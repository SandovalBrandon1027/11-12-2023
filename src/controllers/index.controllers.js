
//PRIMERA FUNCION PARA RENDERIZAR EL INDEX
const renderIndex = (req,res)=>{
    res.render('index')
}

//PRIMRA FUNCION PARA RENDERIZAR EL LOGIN
const renderAbout = (req,res)=>{
    res.render('login')
}



module.exports ={
    renderIndex, 
    renderAbout
}