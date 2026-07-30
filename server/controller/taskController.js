const taskSchema = require("../model/taskSchema")
const { responceHandler } = require("../services/responceHandler")

const createTask = async (req, res) => {
    try {
        const {name, email, phone} = req.body
        if(!name) return responceHandler.error(res, 400, "Name is Required")
        if(!email) return responceHandler.error(res, 400, "email is Required")
        if(!phone) return responceHandler.error(res, 400, "phone is Required")
        const task = new taskSchema({
            name,
            email,
            phone
        })
        await task.save()
        responceHandler.success(res, 201, "create seccessfully", task)
    } catch (error) {
        responceHandler.error(res, 500, "internal server error")
        console.log(error)
    }
}
const getAllTask = async (req, res) => {
    try {
      const tasks = await taskSchema.find()
      responceHandler.success(res, 200, "", tasks)
    } catch (error) {
        responceHandler.error(res, 500, "internal server error")
        console.log(error)
    }
}

module.exports = {createTask, getAllTask}