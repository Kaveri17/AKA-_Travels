const User = require('../models/userModel')

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

    res.send(new_user)
}