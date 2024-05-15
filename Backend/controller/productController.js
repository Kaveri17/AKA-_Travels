const Product = require('../models/productModel')
const Itenary = require('../models/itenaryModel')


exports.addProduct = async (req, res) => {
    let product = await Product.findOne({ product_title: req.body.product_title })
    if (product) {
        return res.status(400).json({ error: "Product already exists" })
    }
   
    // add new product

    // let itenaryIds = await Promise.all(
    //     req.body.itenary.map(async itenary=>{
    //         let ITENARY = await Itenary.create({
    //            days: itenary.days,
    //            day_title: itenary.day_title 
    //         })
    //         if(!ITENARY){
    //             return  res.status(400).json({error:"Something Went Wrong"})
    //         }
    //         return ITENARY._id
    //     })
    // )

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
        highlights:req.body.highlights,
        product_image: req.file?.path,
        price:req.body.price,
        product_people:req.body.product_people,
        cost:req.body.cost,
        strike:req.body.strike,
        day:req.body.day,
        category:req.body.category
        // itenary: itenaryIds
    })
    if(!product){
        return res.status(400).json({error:"Something went wrong"})

    }
    res.send(product)
}
//to get product list

exports.getAllProducts=async(req,res)=>{
    let products=await Product.find().populate('category', 'category_name')
    if(!products){
        return res.status(400).json({error:"Something went wrong"})
    

    }
    res.send(products)
}



//to get product details
exports.getProductDetails=async(req,res)=>{
    let product=await Product.findById(req.params.id).populate('category', 'category_name').populate('itenary')
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
        highlights:req.body.highlights,
        product_image: req.file?.path,
        price:req.body.price,
        product_people:req.body.product_people,
        cost:req.body.cost,
        strike:req.body.strike,
        day:req.body.day,
        category:req.body.category

    },{new:true})
    if(req.file){
        product = await Product.findByIdAndUpdate(req.params.id,{
            image: req.file?.path
        },
        {new: true})
    }
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
            res.send({msg:"Product Deleted Sucessfully"})
        }

    })
    .catch(error=>{
        return res.status(400).json({error:"Something went wrong"})
    })
}

//to get product of category


// exports.getProductByCategory = async(req,res)=>{
//     let products = await Product.find({category: req.params.category_id})
//     if(!products){
//         return res.status(400).json({error:"Something went wrong"})
//     }
//     res.send(products)
// }

exports.getProductByCategory = async (req, res) => {
    try {
        let products = await Product.find({ category: req.params.category_id });
        if (products.length === 0) {
            return res.status(404).json({ error: "No products found for this category" });
        }
        res.send(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};




