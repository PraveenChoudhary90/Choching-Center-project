const express = require("express");
const route = express.Router();
const TeacherController = require("../Controller/TeacherController")


route.post("/TeacherRegistred",TeacherController.TeacherRegistraction )






module.exports = route;