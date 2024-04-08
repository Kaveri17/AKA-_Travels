const express = require('express')
require('dotenv').config()
require('./database/connection')

const port = process.env.PORT
const app =express()
const morgan = require('morgan')
app.use(express.json())

const CategoryRoute=require('./routes/categoryRoute')



// app.use(morgan('dev'))
app.use(morgan('dev'))

const UserRoute = require('./routes/userRoute')


// app.use(TestRoute)
app.use(CategoryRoute)
app.use(UserRoute)


app.listen(port, ()=>{
    console.log(`Server started successfully at port ${port}`)

})
app.use(express.json())