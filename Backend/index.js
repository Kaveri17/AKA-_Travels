const express = require('express')
const req = require('express/lib/request')
require('dotenv').config()
require('./database/connection')

const app =express()
const port = process.env.PORT

app.get('/hello', (req, res)=>{
res.send("Hello there")
})


app.listen(port, ()=>{
    console.log(`Server started successfully at port ${port}`)

})
app.use(express.json())