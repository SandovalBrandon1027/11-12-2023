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
    const renderEditPortafolioForm = (req,res)=>{
    res.send('Formulario para editar un portafolio')
    }
    
    // METODO PARA GUARDAR EN LA BASE DE DATOS
    const updatePortafolio = (req,res)=>{
    res.send('Editar un portafolio')
    }
    // METODO PARA ELIMINAR EN LA BASE DE DATOS
    const deletePortafolio = (req,res)=>{
    res.send('Eliminar un nuevo portafolio')
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


    