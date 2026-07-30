const express = require('express');
const { createTask, getAllTask, updateTask } = require('../controller/taskController');
const route = express.Router()


route.post("/create", createTask );
route.get("/get", getAllTask );
route.put("/update/:id", updateTask );

module.exports = route