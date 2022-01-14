const Project = require("../models/Project");
const router = require("express").Router();
const { sendError, sendSuccess } = require("../helper/help");
router.post("/",async (req, res) => {
    var {name}=req.body;
    if(!name){
        return sendError(res, "Name Field of Project cannot be empty",901);
    }
    const newProject = new Project(req.body);
    
    try {
      const savedProject = await newProject.save(function(err,data){
        if(err){
            return sendError(res,err.message,500)
        }
        else{
           
            return sendSuccess(res,data,200)
        }
    });
      
    } catch (err) {
        return sendError(res, "Project creation failed !!!!!",500);
    }
  });
  module.exports = router