const express = require('express')
require('dotenv').config()
require('./database/connection')


const app =express()
const port = process.env.PORT
const morgan = require('morgan')
const cors = require('cors')
// app.use(express.json())

const CategoryRoute=require('./routes/categoryRoute')
const ProductRoute=require('./routes/productRoute')


const GalleryRoute= require('./routes/galleryRoute')
const BlogRoute = require('./routes/blogRoute')
const UserRoute = require('./routes/userRoute')
const OrderRoute= require('./routes/orderRoute')
const PostRoute = require('./routes/postRoute')
const ContactRoute = require('./routes/contactRoute')
const PopularRoute=require('./routes/popularRoute')
const ItenaryRoute=require('./routes/itenaryRoute')

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
app.use(PostRoute)
app.use(ContactRoute)
app.use(PopularRoute)
app.use(ItenaryRoute)

app.use('/public/upload',express.static('public/upload'))
app.use('/public/uploads',express.static('public/uploads'))

app.listen(port, ()=>{
    console.log(`Server started successfully at port ${port}`)
})
