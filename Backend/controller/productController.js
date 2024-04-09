const Product = require('../models/productModel')
exports.addProduct = async (req, res) => {
    let product = await Product.findOne({ product_title: req.body.product_title })
    if (product) {
        return res.status(400).json({ error: "Category already exists" })
    }
   
    //add new product

    product = await Product.create({
        product_title:req.body.product_title,
        product_location:req.body.product_location,
        accomodation:req.body.accomodation,
        maximum_altitude:req.body.maximum_altitude,
        best_season:req.body.best_season,
        departure_city:req.body.departure_city,
        transportation:req.body.transportation,
        tour_availability:req.body.tour_availability,
        language:req.body.language,
        wifi:req.body.wifi,
        minimum_age:req.body.minimum_age,
        maximum_age:req.body.maximum_age,
        meals:req.body.meals,
        overview:req.body.overview,
        highlights:req.body.highlights




    })
    if(!product){
        return res.status(400).json({error:"Something went wrong"})

    }
    res.send(product)
}
//to get all products

exports.getAllProducts=async(req,res)=>{
    let products=await Product.find()
    if(!products){
        return res.status(400).json({error:"Something went wrong"})
    

    }
    res.send(products)
}



//to get product detail
exports.getProductDetails=async(req,res)=>{
    let product=await Product.findById(req.params.id)
    if(!product){
        return res.status(400).json({error:"Something went wrong"})

    }
    res.send(product)
    
}

//to update product

exports.updateProduct=async(req,res)=>{
    let product=await Product.findByIdAndUpdate(req.params.id,{
        product_title:req.body.product_title,
        product_location:req.body.product_location,
        accomodation:req.body.accomodation,
        maximum_altitude:req.body.maximum_altitude,
        best_season:req.body.best_season,
        departure_city:req.body.departure_city,
        transportation:req.body.transportation,
        tour_availability:req.body.tour_availability,
        language:req.body.language,
        wifi:req.body.wifi,
        minimum_age:req.body.minimum_age,
        maximum_age:req.body.maximum_age,
        meals:req.body.meals,
        overview:req.body.overview,
        highlights:req.body.highlights


    },{new:true})
    if(!product){
        return res.status(400).json({error:"Something went wrong"})

    }
    res.send(product)
}



//to delete product
exports.deleteProduct=(req,res)=>{
    Product.findByIdAndDelete(req.params.id)
    .then(product=>{
        if(!product){
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














