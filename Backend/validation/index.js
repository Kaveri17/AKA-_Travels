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
    // check('product_title',"Product title is required").notEmpty()
    //     .isLength({min: 3}).withMessage("Product name must be at least 3 characters."),
   
    // check('description',"Description is required.").notEmpty()
    //     .isLength({min: 20}).withMessage("Description must be at least 20 characters."),
   
    check('category',"Category is required").notEmpty()
        .matches(/^[0-9a-f]{24}$/).withMessage("Invalid Category")

]
const userCheck = [
    check('username',"username is required.").notEmpty()
    .isLength({min:3}).withMessage("Username must be at least 3 characters"),
    check('email',"Email is required.").notEmpty()
    .isEmail().withMessage("Email Format Incorrect"),
    check('password',"Password is required").notEmpty()
    .matches('[a-z]').withMessage("Password must consist of at least 1 lowercase letter")
    .matches('[A-Z]').withMessage("Password must consist of at least 1 uppercase letter")
    .matches('[0-9]').withMessage("Password must consist of at least 1 number")
    .matches('[+@!#$%]').withMessage("Password must consist of at least 1 special character")
    .isLength({min: 8}).withMessage("Password must be atleast 8 characters")
    .isLength({max: 30}).withMessage("Password must not exceed 30 characters")
    .not().isIn(['P@ssW0rd']).withMessage("Cannot use this password")
]


module.exports={categoryCheck,validation,productCheck,userCheck}