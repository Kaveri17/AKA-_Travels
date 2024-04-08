const Category=require('../models/categoryModel')
exports.addCategory=async(req,res)=>{

//check if category already exists
    let category=await Category.findOne({category_name:req.body.category_name})
    //return if category already exists
    if(category){
        return res.status(400).json({error:"Category already exists"})
    }
    if(!req.file){
        return res.status(400).json({error:"Please upload image."})
    }
    //add new category,if category does not exist
    category=await Category.create({
        category_name:req.body.category_name,
        description:req.body.description,
        image:req.file.path

    })
    if(!category){
        return res.status(400).json({error:"Something went wrong"})

    }
    res.send(category)
}


//to get all categories
exports.getAllCategories=async(req,res)=>{
    let categories=await Category.find()
    if(!categories){
        return res.status(400).json({error:"Something went wrong"})
    

    }
    res.send(categories)
}

//to get categories detail
exports.getCategoryDetails=async(req,res)=>{
    let category=await Category.findById(req.params.id)
    if(!category){
        return res.status(400).json({error:"Something went wrong"})

    }
    res.send(category)
    
}

//to update category
exports.updateCategory=async(req,res)=>{
    let category=await Category.findByIdAndUpdate(req.params.id,{
        category_name:req.body.category_name,
        description:req.body.description,
        image:req.body.image

    },{new:true})
    if(!category){
        return res.status(400).json({error:"Something went wrong"})
    
    }
    res.send(category)

}

//to delete category(using promise)
exports.deleteCategory=(req,res)=>{
    Category.findByIdAndDelete(req.params.id)
    .then(category=>{
        if(!category){
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






