const express = require('express')
require('dotenv').config()
require('./database/connection')

const app =express()
const port = process.env.PORT

app.use(express.json());

const CategoryRoute=require('./routes/categoryRoute')
const TestRoute=require('./routes/categoryRoute')
const UserRoute = require('./routes/userRoute')

app.use(TestRoute)
app.use(CategoryRoute)

app.use(UserRoute)

app.listen(port, ()=>{
    console.log(`Server started successfully at port ${port}`)
})