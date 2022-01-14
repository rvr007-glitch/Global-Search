const Department = require("../models/Department");
const router = require("express").Router();
const { sendError, sendSuccess } = require("../helper/help");
router.post("/", async (req, res) => {
    var { name } = req.body;
    if (!name) {
        return sendError(res, "Name Field of Department cannot be empty", 901);
    }
    const newDepartment = new Department(req.body);
    try {
        const savedDepartment = await newDepartment.save(function(err,data){
            if(err){
                return sendError(res,err.message,500)
            }
            else{
               
                return sendSuccess(res,data,200)
            }
        });
      
    } catch (err) {
        return sendError(res, "Department creation failed !!!!!", 500);
    }
});
module.exports = router;