

const { login , register ,getusers,updateuser,Myprofile} = require("../config/user")

const{Authaudmin} = require("../middleware/Authaudmin")
const router = require("express").Router();


const {
  createDefaultAddress,
  getAllDefaultAddress,
  getOneDefaultAddress,
  updateDefaultAddress,
  deleteDefaultAddress
} = require("../controller/defaultaddress");

router

.post("/login", login)
  .put("/updateuser/:id", updateuser)
  // .get("/user/:id", getUserSingle)
  // .delete("/deleteuser/:id", deleteuser)
  .post("/register", register)
  .get("/users", getusers)
  // .get("/getUserSingle",getUserSiongle)
  .get("/Myprofile",Authaudmin,Myprofile)
  .post("/createAddress",Authaudmin,createDefaultAddress)
  .get("/getaddress",Authaudmin,  getAllDefaultAddress)
  


module.exports = router;


