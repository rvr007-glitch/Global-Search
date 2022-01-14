const express = require('express');
const app = express();
const projectRoute = require("./routes/project")
const departmentRoute = require("./routes/department")
const assetRoute = require("./routes/asset")
const searchRoute = require("./routes/searchByName")
const dotenv = require('dotenv')
dotenv.config();

const port = 8000

const connection = require('./db/connect')
app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(`Example app listening at http://localhost:${port}`)
    }

})
app.use(express.json())
app.use("/api/projects", projectRoute)
app.use("/api/departments", departmentRoute)
app.use("/api/assets", assetRoute)
app.use("/api/search", searchRoute)