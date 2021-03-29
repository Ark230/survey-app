import { createSelector } from "reselect";
import memoize from 'lodash.memoize';

const selectSurvey = state => state.surveys;

export const selectSurveyData = createSelector([selectSurvey], surveys => surveys ? surveys.data : []);

export const selectIsSurveyDataLoaded = createSelector([selectSurvey], surveys => surveys.data.length >0 ? true : false);

export const selectQuestionsBySurvey = memoize(surveyUrlParam => createSelector([selectSurvey], surveys => surveys.data.map(survey => {if(survey.id === parseInt(surveyUrlParam)) return survey.Questions;})))

// export const selectQuestionsBySurvey = memoize(surveyUrlParam => createSelector([selectSurvey], surveys => {console.log(surveys); return [];}))
