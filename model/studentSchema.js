const mongoose = require('mongoose')
const { type } = require('os')

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,
    }, 
    password: {
        type: String,
        required: true,
        max:10,
        min:6

    },
    rollno: {
        type: String,
        required: true,

    }
}, { timestamps: true })

const Student = mongoose.model('Student', studentSchema)
module.exports = Student;