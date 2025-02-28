
const express = require("express");
const route = express.Router();
const StudentController = require("../Controller/StudentController")

route.get("/TeacherData", StudentController.TeacherDisplay);
route.post("/StudentSave", StudentController.StudentSave );


module.exports = route;