
const mongoose = require("mongoose");

const connectDB = async()=>{

try{

    const connect = await mongoose.connect("mongodb+srv://Naresh:Naresh05@cluster0.b9z0by5.mongodb.net/loginathentication")
     console.log("database connnected");

}catch (error){
    throw new Error(`data connected successfully`)
}

}

module.exports = connectDB