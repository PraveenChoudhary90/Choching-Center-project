const TeacherModel = require("../Model/TeacherModel");
const StudentModel = require("../Model/StudentModel");
const TeacherRegistraction = async (req, res) => {
  const { name, email, address, city, number, subject, password } = req.body;
  try {
    const Data = await TeacherModel.create({
      name: name,
      email: email,
      address: address,
      city: city,
      number: number,
      subject: subject,
      password: password,
    });
    res.status(200).send({ msg: "Teacher Registerd Succefully" });
  } catch (error) {
    res.status(400).send({ msg: "Error in Server" });
  }
};

const TeacherDisplay = async (req, res) => {
  const Mydata = await TeacherModel.find();
  res.send(Mydata);
};

const SearchTeacher = async (req, res) => {
  const { name, subject } = req.body;
  try {
    const Data = await TeacherModel.find({
      $or: [{ name: name }, { subject: subject }],
    });
    res.send(Data);
  } catch (error) {
    res.send("Error in server");
  }
};

const TeacherLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const Teacher = await TeacherModel.findOne({ email: email });
    if (!Teacher) {
      res.status(400).send({ msg: "Invalid Email!!" });
    }
    if (Teacher.password != password) {
      res.status(400).send({ msg: "Invalid password!!!" });
    }
    res.status(200).send(Teacher);
  } catch (error) {
    console.log(error);
  }
};

const StudentList = async (req, res) => {
  const { docid } = req.query;
  const Student = await StudentModel.find({ teacherId: docid });
  res.status(200).send(Student);
};

module.exports = {
  TeacherRegistraction,
  TeacherDisplay,
  SearchTeacher,
  TeacherLogin,
  StudentList,
};
