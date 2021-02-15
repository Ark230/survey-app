
const dotenv = require('dotenv');

dotenv.config();

const express = require('express');

const app = express();

const surveyRoutes = require('./routes/survey');

app.use(surveyRoutes);



//app.listen(4000);