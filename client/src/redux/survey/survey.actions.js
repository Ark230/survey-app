import { SurveyTypes } from "./survey.types"
import axios from 'axios';

export const SaveSurvey = (survey) => ({
    type: SurveyTypes.SAVE_SURVEY,
    payload: survey
});

export const EditSurvey = (questions, surveyId) => ({
    type: SurveyTypes.EDIT_SURVEY,
    payload: {questions, surveyId}
});

export const addSurveyQuestion = (questions, surveyId) => ({
    type: SurveyTypes.ADD_SURVEY_QUESTION,
    payload: {questions, surveyId}
});

export const deleteSurveyQuestionStart = () => ({
    type: SurveyTypes.DELETE_QUESTION_START
})

export const deleteSurveyQuestionSuccess = (dataToDelete) => ({
    type: SurveyTypes.DELETE_QUESTION_SUCCESS,
    payload: dataToDelete
})

export const deleteSurveyQuestionFailure = (errMessage) => ({
    type: SurveyTypes.DELETE_QUESTION_FAILURE,
    payload: errMessage
})
//delete funciona, pero da error al 
//intentar eliminar la pregunta sin haber presionado guardar antes
export const deleteSurveyQuestion = (surveyId, questionId) => {
    return async (dispatch) => {
        try {
            dispatch(deleteSurveyQuestionStart());
             
             axios.delete(`http://localhost:4000/manage/survey/${surveyId}/question/${questionId}`).then( r => 
                                {
                                   dispatch(deleteSurveyQuestionSuccess({surveyId, questionId}));
                                }
                    
                        );
            

        } catch (error) {
             dispatch(deleteSurveyQuestionFailure(error));
        }
    }
};

export const fetchSurveysStart = () => ({
    type: SurveyTypes.FETCH_SURVEYS_START
})

export const fetchSurveysSuccess = (surveys) => ({
    type: SurveyTypes.FETCH_SURVEYS_SUCCESS,
    payload: surveys
})

export const fetchSurveysFailure = (errMessage) => ({
    type: SurveyTypes.FETCH_SURVEYS_FAILURE,
    payload: errMessage
})

export const fetchSurveys = () => {
    return (dispatch) => {
        try {
            dispatch(fetchSurveysStart());
            axios.get('http://localhost:4000/manage')
            .then(({data}) => dispatch(fetchSurveysSuccess(data)))
            
        } catch (error) {
            dispatch(fetchSurveysFailure(error));
        }
    }
}