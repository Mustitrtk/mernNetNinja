const express = require('express')
require('dotenv').config()
const db = require('./config/db')
const parser = require('body-parser');

db()

const app = express()

//Use parser for post size
app.use(parser.json({limit:"30mb", extends:true})); 
app.use(parser.urlencoded({limit:"30mb", extends:true}));

const workout = require('./routes/workout')
app.use('/workout',workout)

app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})

app.get('/',(req,res)=>{
    res.status(200).json({message:"hello"});
})

app.listen(process.env.PORT, ()=>{
    console.log(`server is listening on port  ${process.env.PORT} !!!`)
})