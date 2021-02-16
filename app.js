const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const cors = require('cors');

const surveyRoutes = require('./routes/survey');
app.use(cors());
app.use(surveyRoutes);

app.listen(4000);