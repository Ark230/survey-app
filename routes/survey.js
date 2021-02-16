
const express = require('express');
const router = express.Router();
const SurveyController = require('../controllers/survey.controller');


router.route('/manage').get(SurveyController.getSurveys);

module.exports = router;