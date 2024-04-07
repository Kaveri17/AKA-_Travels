const express = require('express')
require('dotenv').config()
require('./database/connection ')
const CategoryRoute=require('./routes/categoryRoute')
const TestRoute=require('./routes/categoryRoute')


const app =express()
const port = process.env.PORT

app.get('/hello', (req, res)=>{
res.send("Hello there")
})
app.use(TestRoute)
app.use(CategoryRoute)


app.listen(port, ()=>{
    console.log(`Server started successfully at port ${port}`)

})