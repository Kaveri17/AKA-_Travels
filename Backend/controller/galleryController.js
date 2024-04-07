const Gallery = require('../models/galleryModel')

exports.addimage = async(req,res) => {
    let gallery = await gallery.create({
        title: req.body.title,
        image:req.file.path
    })
}