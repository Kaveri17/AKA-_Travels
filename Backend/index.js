const express = require('express')
require('dotenv').config()
require('./database/connection')
const morgan=require('morgan')
const CategoryRoute=require('./routes/categoryRoute')



const app =express()
const port = process.env.PORT


app.use(express.json())
app.use(morgan('dev'))

app.use(CategoryRoute)


app.listen(port, ()=>{
    console.log(`Server started successfully at port ${port}`)

})