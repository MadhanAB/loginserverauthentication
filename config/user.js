



const user = require("../module/register")
const {success, successToken}= require("../utils/success")
const asyncHandler = require("express-async-handler");
const { generateToken } = require("./jwttoken");
const jwt = require("jsonwebtoken")


const login = (async (req, res) => {
 
  
  const { mobilenumber , password} = req.body;
  const check = await user.findOne({mobilenumber});

  if (!check) throw new Error("Invalid mobilenumber");
 
  const isPasswordMatched = await check.isPasswordMatched(password);


  if(!isPasswordMatched) throw new Error ("Invalid password");
  
  
  try {

    
    const users = await user.find({mobilenumber});
    if(users){
      const token = await generateToken(users)
      res.cookie('jwt',token,{maxAge :1*60*60*1000,httpOnly:true,samesite:'strict',secure:true,path:'/',partitioned:true})
     
      successToken(res,200,true,"data login succesfully",users,generateToken(users));
  }
    }
   catch (error) {
    throw new Error(error);
  }

});

const Myprofile = asyncHandler(async (req,res)=>{
 
 
 

  try{
   const users = await user.findById({_id:req.body.user_id});
   if (users)
    success(res,200,true,"get data successful",users)
   }

  catch (error){
    throw new Error (error)
  }
})

const register = asyncHandler(async (req, res) => {

  console.log("req",req.body);
  try {
    const create = await user.create(req.body);
    console.log(req.body);
    if (create) success(res, 201, true, "Created Successfully", create);
  } catch (error) {
    throw new Error(error);
  }
});

const getusers = async(req,res)=>{
  try{
      const userss = await user.find();

      if(userss){
          res.json({
              success:true,
              status:201,
              message: "find successfully",
              data:  userss,
              
          })
      }else{
          res.json({

              success:false,
              status:404,
              message:"user not found"
          })
      }
  } catch(error){
      throw error;
  }
};
const updateuser = async (req, res) => {
    const id = req.params.id;
    try {
      const userss = await user.findByIdAndUpdate(id, (req.body),{ new: true });
      if (userss) {
        res.json({
          success: true,
          status: 201,
          message: "Updated successfully",
        });
      } else {
        res.json({
          success: false,
          status: 404,
          message: "user not found",
        });
      }
    } catch (error) {
      throw error;
    }
  }
  
  
  const deleteuser = async (req, res) => {
    const id = req.params.id;
    try {
      const userss = await user.findByIdAndDelete(id);
      if (userss) {
        res.json({
          success: true,
          status: 201,
          message: "Deleted successfully",
        });
      } else {
        res.json({
          success: false,
          status: 404,
          message: "user not found",
        });
      }
    } catch (error) {
      throw error;
    }
  }
  
  
  const getUserSingle = async (req, res) => {
    const id = req.params.id;
    try {
      const userss = await user.findById(id);
      if (userss) {
        res.json({
          success: true,
          status: 201,
          message: "Find successfully",
          data: userss,
        });
      } else {
        res.json({
          success: false,
          status: 404,
          message: "user not found",
        });
      }
    } catch (error) {
      throw error;
    }
  }
  module.exports = { login, register, getusers,updateuser,deleteuser,getUserSingle,Myprofile};
  
  