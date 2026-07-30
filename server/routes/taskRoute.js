const express = require('express');
const { createTask, getAllTask, updateTask, deleteTask } = require('../controller/taskController');
const route = express.Router()


route.post("/create", createTask );
route.get("/get", getAllTask );
route.put("/update/:id", updateTask );
route.delete("/delete/:id", deleteTask );

module.exports = route