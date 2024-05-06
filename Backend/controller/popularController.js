const Popular=require('../models/popularModel')
exports.addPopular=async(req,res)=>{

//check if category already exists
    let popular=await Popular.findOne({popular_name:req.body.popular_name})
    //return if category already exists
    if(popular){
        return res.status(400).json({error:"Category already exists"})
    }
    if(!req.file){
        return res.status(400).json({error:"Please upload image."})
    }
    
    popular=await Popular.create({
        popular_name:req.body.popular_name,
        description:req.body.description,
        popular_image:req.file.path

    })
    if(!popular){
        return res.status(400).json({error:"Something went wrong"})

    }
    res.send(popular)
}


//to get all popular
exports.getAllPopulars=async(req,res)=>{
    let populars=await Popular.find()
    if(!populars){
        return res.status(400).json({error:"Something went wrong"})
    

    }
    res.send(populars)
}

//to get popular detail
exports.getPopularDetails=async(req,res)=>{
    let popular=await Popular.findById(req.params.id)
    if(!popular){
        return res.status(400).json({error:"Something went wrong"})

    }
    res.send(popular)
    
}

//to update popular
exports.updatePopular=async(req,res)=>{
    let popular=await Popular.findByIdAndUpdate(req.params.id,{
        popular_name:req.body.popular_name,
        description:req.body.description,
        popular_image: req.file?.path,

    },{new:true})
    if(!popular){
        return res.status(400).json({error:"Something went wrong"})
    
    }
    res.send(popular)

}

//to delete popular(using promise)
exports.deletePopular=(req,res)=>{
    Popular.findByIdAndDelete(req.params.id)
    .then(popular=>{
        if(!popular){
            return res.status(400).json({error:"Something went wrong"})  
    
        }
        else{
            res.send({msg:"Popular Deleted Sucessfully"})
        }

    })
    .catch(error=>{
        return res.status(400).json({error:"Something went wrong"})  

    })


}








