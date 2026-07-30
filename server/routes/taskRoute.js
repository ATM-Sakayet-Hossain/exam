const express = require('express');
const { createTask } = require('../controller/taskController');
const route = express.Router()


route.post("/create", createTask );

module.exports = route