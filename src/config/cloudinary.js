//Importart cloudinary
const cloudinary = require('cloudinary').v2

//Establecer ñas variables de entorno
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET,
    secure: true
});

//crear metodo para enviar la imagen a cloudinary y que la misma se almcene 
//en un directorio llamado portafolio
module.exports.uploadImage = async(filePath) => {

    return await cloudinary.uploader.upload(filePath,{folder:'portafolio'})
}

//Para eliminar la imagen del cloudinary
module.exports.deleteImage = async (publicId)=>{
    
    return await cloudinary.uploader.destroy(publicId)
}