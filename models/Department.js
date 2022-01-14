const mongoose = require("mongoose");
const DepartmentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please enter a name'],
        min:3,
        max:25
    },
    assets_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Assets",
       required:true
    },
    })
    module.exports =mongoose.model("Departments",DepartmentSchema)