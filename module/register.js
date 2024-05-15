
const bcrypt = require("bcrypt")
const mongoose = require("mongoose");

const user = new mongoose.Schema(

    {
        username:{
            type:String
        },
        mobilenumber:{
            type:Number
        },
        email:{
            type:String
        },
        password:{
            type:String
        }
    }
)
user.pre("save",async function (next){

    if(!this.isModified("password")){
        next();
    }
  
    const salt = await bcrypt.genSaltSync(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });
  user.methods.isPasswordMatched = async  function (enteredpassword) {
    return await bcrypt.compare(enteredpassword,this.password);
  };
  
module.exports = mongoose.model("user",user)