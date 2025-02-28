const mongoose = require("mongoose");
const StudentSchema= new mongoose.Schema({ 
     name:String,
     subject:String, 
     city:String,
     mobile:String,
     email:String,
     teacherId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"teacher"
     }
})

module.exports = mongoose.model("student", StudentSchema);