//External Imports
const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const path = require("path")
const cookieParser = require('cookie-parser')

//Internal Imports
const {notFoundHandler, errorHandler} = require('./middlewares/common/errorHandler')


const app = express()
dotenv.config()

//Database Connection
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> console.log('Database connection successsful...'))
.catch(err=> console.log(err))

//request parsers
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// set View engine
app.set("view engine", "ejs")

//set static folder
app.use(express.static(path.join(__dirname, "public")))

//parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET))

//routing setup

//error handling(404 not found handler)
app.use(notFoundHandler)

// default error handler 
app.use(errorHandler)





app.listen(process.env.PORT, ()=>{
    console.log(`App Listening on port ${process.env.PORT}`)
})