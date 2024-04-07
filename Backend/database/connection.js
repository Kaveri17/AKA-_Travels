const mongoose = require('mongoose')
<<<<<<< HEAD
mongoose.connect(process.env.DATABASE)
.then(()=>{console.log("DATABASE CONNECTED SUCCESSFULLY")})
=======

mongoose.connect(process.env.DATABASE)
.then(()=>{console.log("DATABASE CONNECTED SUCCESFULLY")})
>>>>>>> 692eca8a64e03f2e32f437c6fdc55a49b59b6886
.catch(error=>console.log(error.message))