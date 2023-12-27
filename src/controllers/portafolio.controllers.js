const Portfolio = require('../models/Portfolio')
const fs = require('fs-extra')
const { uploadImage,deleteImage } = require('../config/cloudinary')

// METODO PARA LISTAR LOS PORTAFOLIOS
const renderAllPortafolios = async(req,res)=>{
    const portfolios = await Portfolio.find({user:req.user._id}).lean()
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
        const portfolio = await Portfolio.findById(req.params.id).lean()
        if(portfolio._id != req.params.id) return res.redirect('/portafolios')
        
        if(req.files?.image) {
            if(!(req.files?.image)) return res.send("Se requiere una imagen")
            await deleteImage(portfolio.image.public_id)
            const imageUpload = await uploadImage(req.files.image.tempFilePath)
            const data ={
                title:req.body.title || portfolio.name,
                category: req.body.category || portfolio.category,
                description:req.body.description || portfolio.description,
                image : {
                public_id:imageUpload.public_id,
                secure_url:imageUpload.secure_url
                }
            }
            await fs.unlink(req.files.image.tempFilePath)
            await Portfolio.findByIdAndUpdate(req.params.id,data)
        }
        else{
            const {title,category,description}= req.body
            await Portfolio.findByIdAndUpdate(req.params.id,{title,category,description})
        }
        res.redirect('/portafolios')
    }

    
    // METODO PARA ELIMINAR EN LA BASE DE DATOS

    const deletePortafolio = async(req,res)=>{
        const portafolio = await Portfolio.findByIdAndDelete(req.params.id)
        await deleteImage(portafolio.image.public_id)
        res.redirect('/portafolios')
    }
    
    
    const renderPortafolioForm = (req,res)=>{
    res.render('portafolio/newFormPortafolio')
    }
    
    const createNewPortafolio =async (req,res)=>{

        const {title, category,description} = req.body   
        const newPortfolio = new Portfolio({title,category,description})
        newPortfolio.user = req.user._id
        if(!(req.files?.image)) return res.send("Se requiere una imagen")
        const imageUpload = await uploadImage(req.files.image.tempFilePath)
        newPortfolio.image = {
            public_id:imageUpload.public_id,
            secure_url:imageUpload.secure_url
        }
        await fs.unlink(req.files.image.tempFilePath)
        await newPortfolio.save()
        res.redirect('/portafolios')
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


    