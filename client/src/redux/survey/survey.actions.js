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

// export const LoadSurveys = (surveys) => ({
//     type: SurveyTypes.LOAD_SURVEYS,
//     payload: surveys
// })

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
        dispatch(fetchSurveysStart());
        try {
            axios.get('http://localhost:4000/manage')
            .then(({data}) => dispatch(fetchSurveysSuccess(data)))
            
        } catch (error) {
            dispatch(fetchSurveysFailure(error));
        }
    }
}