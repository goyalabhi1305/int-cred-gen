const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    summary: {
        type:String,
    }
})
module.exports = mongoose.model('Students', studentSchema)