const Project = require("../models/Project");
const Department = require("../models/Department");



const router = require("express").Router();
const { sendError, sendSuccess } = require("../helper/help");
const Asset = require("../models/Asset");
const errors = require("../helper/error");
var ProjectSearch = {}
var DepartmentSearch = {}
var AssestSearch = {}


router.post('/', async (req, res) => {
    if (!req.body.name) {
        return sendError(res, "You are Searching null", 901);
    }
    const searchedField = req.body.name;
    var result = [];
    var projResult = await Project.find({ name: { $regex: searchedField, $options: '$i' } }).populate('department_id').clone().catch(function (err) { console.log(err) })
    if (projResult) {
        ProjectSearch = { ...projResult }
        result.push(projResult)
    }
    var departmentResult = await Department.find({ name: { $regex: searchedField, $options: '$i' } }).populate('assets_id').clone().catch(function (err) { console.log(err) })
    if (departmentResult) {
        DepartmentSearch = { departmentResult }
        result.push(departmentResult)
    }

    var assetResult = await Asset.find({ name: { $regex: searchedField, $options: '$i' } }).clone().catch(function (err) { console.log(err) })
    if (assetResult) {
        AssestSearch = { assetResult }
        result.push(assetResult)
    }

    var send = { ProjectSearch, DepartmentSearch, AssestSearch }

    sendSuccess(res, result)
})
module.exports = router;
// name indexing so that it is fast