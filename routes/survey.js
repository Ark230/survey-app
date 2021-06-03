
const express = require('express');
const surveyRouter = express.Router();
const questionRouter = require('./question');
const SurveyController = require('../controllers/survey.controller');
const QuestionController = require('../controllers/question.controller');


surveyRouter.use('/survey/:id/question', questionRouter);

surveyRouter.route('/').get(SurveyController.getSurveys);
surveyRouter.route('/survey/:id').get(QuestionController.getQuestionsBySurveyId);
surveyRouter.route('/survey/:id').post(SurveyController.updateSurveyQuestions);



module.exports = surveyRouter;