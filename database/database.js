
const mongoose = require("mongoose");

const connectDB = async()=>{

try{

    const connect = await mongoose.connect("mongodb://localhost:27017/loginathentication")
     console.log("database connnected");

}catch (error){
    throw new Error(`data connected successfully`)
}

}

module.exports = connectDB