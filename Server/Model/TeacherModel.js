const mongoose = require("mongoose");
const TeacherSchema = new mongoose.Schema({
    name:String,
    email:String,
    address:String,
    city:String,
    number:String,
    subject:String,
    password:String
})

module.exports = mongoose.model("/teacher", TeacherSchema)