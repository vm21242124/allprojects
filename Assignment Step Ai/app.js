const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
const cors = require("cors");

const PatientRoute = require("./routes/Patients");
const DoctorRoute = require("./routes/Doctors");
const ConversationRoute = require("./routes/Conversation");
const cookieParser = require("cookie-parser");

dotenv.config();
const app = express();

const corsConfig=cors({
    allowedHeaders: 'Content-Type,Authorization',
    origin:"*",
    credentials:true,
    methods:"*"
})
app.use(corsConfig)


app.use(bodyParser.json());

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is running on port ${process.env.SERVER_PORT}`);
});

app.use("/patient",PatientRoute);
app.use("/doctor",DoctorRoute);
app.use("/conversations",ConversationRoute);