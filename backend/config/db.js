const mongoose = require('mongoose')
require('dotenv').config()

const db = async()=>{
    try{
        mongoose.connect(process.env.MONGODB_URI)
        console.log('db connected!!!')
    }
    catch(error){
        console.log(error)
    }
}


module.exports=db