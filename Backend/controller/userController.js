const User = require('../models/userModel')
const Token = require('../models/tokenModel')
const crypto = require('crypto')
const sendEmail = require('../utils/emailSender')

// register
exports.register = async (req, res) => {
    const {username, email , password} = req.body

    /*
    const {username, email , password} = req.body
    console.log("Request Body:", req.body); // Add this line to log the entire request body
    console.log("Username:", username); // Add this line to log the username
    console.log("Email:", email); // Add this line to log the email
    console.log("Password:", password);*/

    // check username if already exists
    const usernameExists = await User.findOne({username})
    if(usernameExists){
        return res.status(400).json({error: "Username is not available."})
    }

    // check email if already exists
    const emailExists = await User.findOne({email})
    if(emailExists){
        return res.status(400).json({error: "Email already registered."})
    }

    // register user
    let new_user = await User.create({
        username,
        email,
        password
    })

    if(!new_user){
        return res.status(400).json({error: "Something went wrong"})
    }

    // generate token
    const token = await Token.create({
        token : crypto.randomBytes(24).toString('hex'),
        user: new_user._id
    })
    if(!token){
        return res.status(400).json({error:"Failed to generate token"})
    }

    // send verification email
    const URL = `http://localhost:8000/verify/${token.token}`
    
    sendEmail({
        from: "noreply@something.com",
        to: email,
        subject: "Verification Email",
        text: "Please copy paste the following link in the browser to verify your email"+ URL,
        html: `<a href='${URL}'><button>Verify Email</button></a>`
    })


    res.send(new_user)
}

// verify email
exports.verifyEmail = async (req, res) => {
    // check if token is correct or not
    let token = await Token.findOne({ token: req.params.token })
    if (!token) {
        return res.status(400).json({ error: "Token not found, or may have expired" })
    }
    // find user associated with token
    let user = await User.findById(token.user)
    if (!user) {
        return res.status(400).json({ error: "User not found" })
    }
    // check if user is already verified
    if (user.isVerified) {
        return res.status(400).json({ error: "User already verified. Login to continue" })
    }
    // verify user
    user.isVerified = true
    user = await user.save()
    if(!user){
        return res.status(400).json({error: "Failed to verify, please try again later"})
    }
    res.send({message: "User verified successfully"})
}

// to resend verification email 
exports.resendVerification = async(req, res) => {
    // checking if email is registered or not 
    let user = await User.findOne({email: req.body.email})
    if(!user){
        return res.status(400).json({error:"Email not registered"})
    }
    // checking if password is correct or not
    if(!user.authenticate(req.body.password)){
        return res.status(400).json({error:"Email and password doesnot match"})
    }
    // checking if already verified 
    if(user.isVerified){
        return res.status(400).json({error:"User already verified.Login to continue"})
    }
    // generate token
    const token = await Token.create({
        token : crypto.randomBytes(24).toString('hex'),
        user: user._id
    })
    if(!token){
        return res.status(400).json({error:"Failed to generate token"})
    }

    // send the email verification link
    const URL = `http://localhost:8000/verify/${token.token}`

    sendEmail({
        from: "noreply@something.com",
        to: req.body.email,
        subject: "Verification Email",
        text: "Please paste the following link in the broswer to verify your email " + URL,
        html: `<a href='${URL}'><button>Verify Email</button></a>`  
    })

    res.send({message: "Verification Link Has Been Sent To Your Email"})

}

// forget password
exports.forgetpassword = async(req,res) => {
    // check if email exist or not
    let user = await User.findOne({email: req.body.email}) 
    if(!user){
        return res.status(400).json({error:"Email not registered."})
    }
    // generate token
    const token = await Token.create({
        token : crypto.randomBytes(24).toString('hex'),
        user : user._id
    })
    if(!token){
        return res.status(400).json({error:"Token not generated. Please try again later"})
    }

    // sending password reset link in email
    const URL = `http://localhost:8000/resetpassword/${token.token}`

    sendEmail({
        from: "noreply@something.com",
        to: req.body.email,
        subject: "Password Reset Link",
        text: "Please paste the following link in the broswer to reset your password " + URL,
        html: `<a href='${URL}'><button>Reset Password</button></a>`  
    })

    res.send({message: "Password Reset Link Has Been Sent To Your Email."})
}

// to reset password
exports.resetPassword = async (req,res) =>{
    // checking if the token is valid or not
    let token = await Token.findOne({token : req.params.token})
    if(!token){
        return res.status(400).json({error: "Token Invalid or Token Expired. Regenerate the token again."})
    }
    // find User associated with the token 
    let user = await User.findById(token.user)
    if(!user){
        return res.status(400).json({error: "User Not Found."})
    }
    // updating/resetting password
    user.password = req.body.password
    user = await user.save()
    if(!user){
        return res.status(400).json({error: "Something went wrong. Please try again later"})
    }
    res.send({message: "Password has changed successfully."})

}


