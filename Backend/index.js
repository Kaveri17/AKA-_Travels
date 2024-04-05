const express = require('express')
require('dotenv').config()
const app =express()
const port = process.env.PORT

app.get('/hello', (req, res)=>{
res.send("Hello there")
})


app.listen(port, ()=>{
    console.log(`Server started successfully at port ${port}`)

})