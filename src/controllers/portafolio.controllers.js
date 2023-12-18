const Portfolio = require('../models/Portfolio')


// METODO PARA LISTAR LOS PORTAFOLIOS
const renderAllPortafolios = async(req,res)=>{
    const portfolios = await Portfolio.find().lean()
    res.render("portafolio/allPortfolios",{portfolios})
    }
    // METODO PARA LISTAR EL DETALLE DE UN PORTAFOLIO
    const renderPortafolio = (req,res)=>{
    res.send('Mostrar el detalle de un portafolio')
    }
    
    // // METODO PARA MOSTRAR EL FORMULARIO
    // // const renderPortafolioForm = (req,res)=>{
    // res.send('Formulario para crear un portafolio')
    // }
    
    // // METODO PARA GUARDAR UNA BASE DE DATOS LO CAPTURADO EN EL FORM
    // const createNewPortafolio = (req,res)=>{
    // res.send('Crear un nuevo portafolio')
    // }
    
    
    
    // METODOD PARA ACTUALIZAR FORMULARIO
    const renderEditPortafolioForm =async(req,res)=>{

        //consulta del portafolio 
        const portfolio = await Portfolio.findById(req.params.id).lean()
        res.render('portafolio/editPortfolio',{portfolio})
    }
    

    //MEtodo para guardar el formulario en BDD
    const updatePortafolio = async(req,res)=>{
        const {title,category,description}= req.body
        await Portfolio.findByIdAndUpdate(req.params.id,{title,category,description})
        res.redirect('/portafolios')
    }

    
    // METODO PARA ELIMINAR EN LA BASE DE DATOS
    const deletePortafolio = async(req,res)=>{
        await Portfolio.findByIdAndDelete(req.params.id)
        res.redirect('/portafolios')
    }
    
    
    
    const renderPortafolioForm = (req,res)=>{
    res.render('portafolio/newFormPortafolio')
    }
    
    const createNewPortafolio =async (req,res)=>{
    const {title, category,description} = req.body
    const newPortfolio = new Portfolio({title,category,description})
    await newPortfolio.save()
    res.json({newPortfolio})
    }
    
    
    



    
    // EXPORTACION COMMONJS NOMBRADA = DEFAULT
    module.exports ={
    renderAllPortafolios,
    renderPortafolio,
    renderPortafolioForm,
    createNewPortafolio,
    renderEditPortafolioForm,
    updatePortafolio,
    deletePortafolio
    }


    