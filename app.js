const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./util/database');

const surveyRoutes = require('./routes/survey');
app.use(cors());
app.use(express.json())
app.use('/manage', surveyRoutes);

// db.sync().then(() => {
//     app.listen(4000);

// })

app.listen(4000);
