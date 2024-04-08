const express = require('express')
const req = require('express/lib/request')
require('dotenv').config()

require('./database/connection')
const CategoryRoute=require('./routes/categoryRoute')
const TestRoute=require('./routes/categoryRoute')
const GalleryRoute= require('./routes/galleryRoute')
const BlogRoute = require('./routes/blogRoute')


const app =express()
const port = process.env.PORT

const UserRoute = require('./routes/userRoute')

app.get('/hello', (req, res)=>{
res.send("Hello there")
})
app.use(express.json());
app.use(GalleryRoute)
app.use(BlogRoute)
app.use(TestRoute)
app.use(CategoryRoute)

app.use(express.json());
app.use(UserRoute)


app.listen(port, ()=>{
    console.log(`Server started successfully at port ${port}`)

})
