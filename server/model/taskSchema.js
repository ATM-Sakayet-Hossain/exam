const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        // unique: true
    },
    isVarified: {
        type: Boolean,
        default: false
    }
},{timestamps: true})

module.exports = mongoose.model("task", taskSchema)