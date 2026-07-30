const express = require('express');
const { createTask, getAllTask } = require('../controller/taskController');
const route = express.Router()


route.post("/create", createTask );
route.get("/get", getAllTask );

module.exports = route