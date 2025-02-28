const TeacherModel= require("../Model/TeacherModel");
const StudentModel= require("../Model/StudentModel");

const TeacherDisplay=async(req, res)=>{
   const {id} =req.query;
   try {
     const Teacher = await TeacherModel.findById(id);
     console.log(Teacher);
     res.status(200).send(Teacher);
   } catch (error) {
      console.log(error);
   }
}

const StudentSave=async(req, res)=>{
 
    const {docid, name, subject,  city, mobile, email} = req.body; 
    const Student = await StudentModel.create(
        {
            name:name,
           subject:subject, 
           city:city,
           mobile:mobile,
           email:email,
           teacherId:docid
        }
    )
     res.status(200).send({msg:"Your Appointment Booked!"});
}

module.exports={
    TeacherDisplay,
    StudentSave
}