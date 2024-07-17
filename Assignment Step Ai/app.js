const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require("dotenv");



const PatientRoute = require("./routes/Patients");
const DoctorRoute = require("./routes/Doctors");
const ConversationRoute = require("./routes/Conversation");

dotenv.config();
const app = express();
app.use(bodyParser.json());

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is running on port ${process.env.SERVER_PORT}`);
});

app.use("/patient",PatientRoute);
app.use("/doctor",DoctorRoute);
app.use("/conversations",ConversationRoute);