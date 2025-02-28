const express  = require("express");
const app = express();
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors");
require("dotenv").config();
const TeacherRoute = require("./Routes/TeacherRoute")


app.use(cors());

// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.STRING).then(()=>{
    console.log("DB IS CONNECTED")
})

app.use("/Teacher",  TeacherRoute)






const port = process.env.PORT


app.listen(port, ()=>{
    console.log(`Server is running on ${port} port`)
})