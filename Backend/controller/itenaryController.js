// const Product = require('../models/productModel')
const Itenary=require('../models/itenaryModel')

const { populate } = require('../models/userModel')

exports.addItenary = async (req, res) => {
    let itenary=await Itenary.create({
        days:req.body.days,
        day_title: req.body.day_title 
    
    })

    if(!itenary){
        return res.status(400).json({error:"Something went wrong"})
    }

    let product = await Product.findById(req.params.id)
    product.itenary = [...product.itenary, itenary._id];
    product = await product.save();

    if (!product) {
        return res.status(404).json({ error: "Product not found" });
    }

    // res.send(itenary)
    res.send(product)


}

exports.updateItenary=async(req,res)=>{
    let itenary=await Itenary.findByIdAndUpdate(req.params.id,{
        days:req.body.days,
        day_title: req.body.day_title 

    },{new:true})
    if(!itenary){
        return res.status(400).json({error:"Something went wrong"})
    
    }
    res.send(itenary)

}
exports.deleteItenary=(req,res)=>{
    Itenary.findByIdAndDelete(req.params.id)
    .then(itenary=>{
        if(!itenary){
            return res.status(400).json({error:"Something went wrong"})  
    
        }
        else{
            res.send({msg:"Category Deleted Sucessfully"})
        }

    })
    .catch(error=>{
        return res.status(400).json({error:"Something went wrong"})  

    })


}















