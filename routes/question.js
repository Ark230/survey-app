const express = require('express');
const questionRouter = express.Router({mergeParams: true});
const QuestionController = require('../controllers/question.controller');


questionRouter.route('/:id').delete(QuestionController.deleteQuestionFromSurvey);

module.exports = questionRouter;