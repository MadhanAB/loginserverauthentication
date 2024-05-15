


const notFound = (req,res,next)=>{

    const notfound = new Error (`not Found:${req.orginalUrl}`);
  
    res.status(404);
  
    next(errror)
  
  
  };
  
  const errorHandler = (err,req,res,next)=>{
  
      const statuscode = res.statuscode ==200 ? 500 : res.statuscode
      res.status(statuscode);
      res.json({
        success: false,
        message: err?.message,
        stack: err?.stack,
      });
      
  
  };
  module.exports = {notFound,errorHandler}