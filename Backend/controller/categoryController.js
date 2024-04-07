const Category=require('../models/categoryModel')
exports.addCategory=async(req,res)=>{

//check if category already exists
    let category=await Category.findOne({categoey_name:req.body.categoey_name})
    //return if category already exists
    if(category){
        return res.status(400).json({error:"Category already exists"})
    }
    //add new category,if category does not exist
    category=await Category.create({
        category_name:req.body.categoey_name
    })
    if(!category){
        return res.status(400).json({error:"Something went wrong"})

    }
    res.send(category)
}

