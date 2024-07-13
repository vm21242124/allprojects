const express = require('express');
const bodyParser = require('body-parser');

const PatientRoute = require("./routes/Patients")
const DoctorRoute = require("./routes/Doctors")

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.use("/patient",PatientRoute);
app.use("/doctor",DoctorRoute);