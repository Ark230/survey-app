import { createSelector } from "reselect";

const selectSurvey = state => state.surveys;

export const selectSurveyData = createSelector([selectSurvey], surveys => surveys ? surveys.surveys : []);

export const selectIsSurveyDataLoaded = createSelector([selectSurvey], surveys => surveys.surveys.length >0 ? true : false);