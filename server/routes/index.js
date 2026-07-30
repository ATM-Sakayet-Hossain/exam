const express = require('express');
const route = express.Router()
const taskRoute = require("./taskRoute")
const authRoute = require("./authRoute")


route.use("/auth", authRoute)
route.use("/task", taskRoute)

module.exports = route