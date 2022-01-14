const mongoose = require("mongoose");
const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter a name'],
        min: 3,
        max: 25
    },
    department_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Departments",
        required: true,
    },
})
module.exports = mongoose.model("Projects", ProjectSchema)