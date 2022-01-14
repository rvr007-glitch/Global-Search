const Assets = require("../models/Asset");
const router = require("express").Router();
const { sendError, sendSuccess } = require("../helper/help");
router.post("/", (req, res) => {
    var {name}=req.body;
    if(!name){
        return sendError(res, "Name Field of Asset cannot be empty",901);
    }
    const newAsset = new Assets(req.body);
    try {
      newAsset.save(function(err,data){
        if(err){
            return sendError(res,err.message,500)
        }
        else{
           
            return sendSuccess(res,data,200)
        }
    });
     
    } catch (err) {
        return sendError(res, "Asset creation failed !!!!!",500);
    }
  });
  module.exports = router;