const Gallery = require('../models/galleryModel')

exports.addimage = async(req,res) => {
    // let gallery = await gallery.create({
    //     title: req.body.title,
    //     image:req.file.path
    // })
    if(!req.file){
        return res.status(400).json({error: "Please upload an image"})
    }
    let image = await Gallery.create({
        image_title: req.body.image_title,
        image: req.file.path
    })
    if(!image){
        return res.status(400).json({error: "Something went wrong."})
    }
    res.send(image)
}

// get all gallery list
exports.getGallery = async(req,res) =>{
    let galleries = await Gallery.find()
    if(!galleries){
        return res.status(400).json({error: "Something went wrong"})
    }
    res.send(galleries)
}