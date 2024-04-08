const express = require('express')
require('dotenv').config()
require('./database/connection')

const port = process.env.PORT
const app =express()
const morgan = require('morgan')
app.use(express.json())

const CategoryRoute=require('./routes/categoryRoute')
const GalleryRoute= require('./routes/galleryRoute')
const BlogRoute = require('./routes/blogRoute')
const UserRoute = require('./routes/userRoute')

// app.use(morgan('dev'))
app.use(morgan('dev'))

app.use(express.json());
app.use(GalleryRoute)
app.use(BlogRoute)
app.use(CategoryRoute)
app.use(UserRoute)


app.listen(port, ()=>{
    console.log(`Server started successfully at port ${port}`)

})
