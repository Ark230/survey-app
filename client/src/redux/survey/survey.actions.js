import { SurveyTypes } from "./survey.types"

export const SaveSurvey = (survey) => ({
    type: SurveyTypes.SAVE_SURVEY,
    payload: survey
});

export const EditSurvey = (questions, surveyId) => ({
    type: SurveyTypes.EDIT_SURVEY,
    payload: {questions, surveyId}
});

export const LoadSurveys = (surveys) => ({
    type: SurveyTypes.LOAD_SURVEYS,
    payload: surveys
})