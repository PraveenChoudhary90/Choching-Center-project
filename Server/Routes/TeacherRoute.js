const express = require("express");
const route = express.Router();
const TeacherController = require("../Controller/TeacherController")


route.post("/TeacherRegistred",TeacherController.TeacherRegistraction )
route.post("/TeacherDisplay",TeacherController.TeacherDisplay )
route.post("/SearchTeacher",TeacherController.SearchTeacher )
route.post("/TeacherLogin",TeacherController.TeacherLogin )
route.get("/StudentList", TeacherController.StudentList);





module.exports = route;