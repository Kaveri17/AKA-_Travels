const uuidv1 = require('uuidv1')
const moongoose = require('mongoose')
const crypto = require('crypto')

const userSchema = new moongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    hashed_password: {
        type: String,
        required: true
    },
    role: {
        type: Number,
        default: 0
        // 0- customer , 1 - admin
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    salt: String
},{timestamps: true})

// virtual field
userSchema.virtual("password")
    .set(function(password){
        this.salt = uuidv1()
        this.hashed_password = this.encryptPassword(password)
    })
    .get(function(){
        return this._password
    })

userSchema.methods = {
    encryptPassword: function(password){
        if(password == null){
            return ""
        }
        try{
            return crypto.createHmac('sha256', this.salt).update(password).digest('hex')
        }
        catch{
            return ""
        }
    }
}


module.exports = moongoose.model("User", userSchema)
