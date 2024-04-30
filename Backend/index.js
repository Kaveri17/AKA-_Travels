const express = require('express')
require('dotenv').config()
require('./database/connection')


const app =express()
const port = process.env.PORT
const morgan = require('morgan')
const cors = require('cors')
app.use(express.json())

const CategoryRoute=require('./routes/categoryRoute')
const ProductRoute=require('./routes/productRoute')


const GalleryRoute= require('./routes/galleryRoute')
const BlogRoute = require('./routes/blogRoute')
const UserRoute = require('./routes/userRoute')
const OrderRoute= require('./routes/orderRoute')

// app.use(morgan('dev'))
app.use(morgan('dev'))
app.use(cors()) 

app.use(express.json());
app.use(GalleryRoute)
app.use(BlogRoute)
app.use(CategoryRoute)
app.use(UserRoute)
app.use(ProductRoute)
app.use(OrderRoute)

<<<<<<< HEAD
app.use('/public/upload',express.static('public/upload'))
app.use('/public/uploads',express.static('public/uploads'))

=======
app.use('/public/upload', express.static('public/upload'))
>>>>>>> 46587568d9458819f007056926bf28e68fc819b9

app.listen(port, ()=>{
    console.log(`Server started successfully at port ${port}`)
})
