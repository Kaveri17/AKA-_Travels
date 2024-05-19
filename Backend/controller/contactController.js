const Contactmessage = require('../models/contactModel')
const sendEmail = require('../utils/emailSender')

exports.submitMessage = async (req, res) => {
    try{
        let contactmessage = new Contactmessage({
            contact_fname: req.body.contact_fname,
            contact_lname: req.body.contact_lname,
            contact_email: req.body.contact_email,
            contact_phoneno: req.body. contact_phoneno,
            contact_message: req.body.contact_message
        })
        const savedContactmessage = await contactmessage.save();

        sendEmail({
            from: "noreply@something.com",
            to: req.body.contact_email,
            subject: "User Message Email",
            text: `Send message: \n Contact_fname: ${contactmessage.contact_fname}\n
            Contact_lname: ${contactmessage.contact_lname}\n Contact_email: ${contactmessage.contact_email}\n
            Contact_phoneno: ${contactmessage.contact_phoneno}\n
            Contact_message: ${contactmessage.contact_message}`
        
            

        });
        res.status(200).json({
            success: true,
            data: savedContactmessage
        });
       
    }
    catch (error) {
            console.error("error in sending message:", error);
            res.status(400).json({success:false, error: error.message});

        }
        
    };

    // get all messages

exports.getAllMessage = async (req, res) => {
   let message = await Contactmessage.find()
   if(!message){
    return res.status(400).json({error:"No message found."})
   }
   res.send(message)
}
// get message by id

exports.getMessage  = async(req, res) => {
    let message = await Contactmessage.findById(req.params.id)
    if(!message){
        return res.status(400).json({error:"Message Not Found"})
    }
    res.send(message)
}


