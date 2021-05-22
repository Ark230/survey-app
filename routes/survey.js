
const express = require('express');
const router = express.Router();
const SurveyController = require('../controllers/survey.controller');
const QuestionController = require('../controllers/question.controller');

router.route('/').get(SurveyController.getSurveys);
router.route('/survey/:id').get(QuestionController.getQuestionsBySurveyId);
router.route('/survey/:id').post(SurveyController.updateSurveyQuestions);


module.exports = router;