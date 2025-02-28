const TeacherModel = require("../Model/TeacherModel")

const TeacherRegistraction = async(req, res)=>{
   const { name,email,address,city,number,subject,password }=req.body;
   try {
    const Data = await TeacherModel.create({
        name:name,
    email:email,
    address:address,
    city:city,
    number:number,
    subject:subject,
    password:password
    }) 
    res.status(200).send({msg:"Teacher Registerd Succefully"});
   } catch (error) {
    res.status(400).send({msg:"Error in Server"})
   }
}

module.exports = {
    TeacherRegistraction
}