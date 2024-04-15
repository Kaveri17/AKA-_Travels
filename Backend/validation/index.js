const {check,validationResult}=require('express-validator')

const categoryCheck =[
    check('category_name', "Category name is required").notEmpty()
    .isLength({min: 3}).withMessage("Category name must be at least 3 characters")
]

const validation=(req,res,next)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({error:errors.array()[0].msg.toString()})
        
    }

    next()

}
const productCheck = [
    check('product_title',"Product title is required").notEmpty()
        .isLength({min: 3}).withMessage("Product name must be at least 3 characters."),
   
    check('description',"Description is required.").notEmpty()
        .isLength({min: 20}).withMessage("Description must be at least 20 characters."),
   
    check('category',"Category is required").notEmpty()
        .matches(/^[0-9a-f]{24}$/).withMessage("Invalid Category")

]

module.exports={categoryCheck,validation,productCheck}