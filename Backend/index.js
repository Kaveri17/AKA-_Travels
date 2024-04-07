const express = require('express')
require('dotenv').config()
require("./database/connection")

const app =express()
const port = process.env.PORT

const UserRoute = require('./routes/userRoute')

app.get('/hello', (req, res)=>{
res.send("Hello there")
})

app.use(express.json());
app.use(UserRoute)


app.listen(port, ()=>{
    console.log(`Server started successfully at port ${port}`)

})