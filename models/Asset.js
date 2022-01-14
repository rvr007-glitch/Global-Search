const mongoose = require("mongoose");
const AssetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter a name'],
        min: 3,
        max: 25
    },

})
module.exports = mongoose.model("Assets", AssetSchema)