import { SaveSurvey } from "./survey.actions";
import { SurveyTypes } from "./survey.types";
import { EditSurveyQuestions, addQuestion } from './survey.util';


const INITIAL_STATE = {
    data: [],
    isFetching: false,
    errorMessage:{}
}

export const SurveyReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SurveyTypes.SAVE_SURVEY:
            return {...state, data: SaveSurvey(action.payload)};
    
        case SurveyTypes.EDIT_SURVEY:
            return {...state, data: EditSurveyQuestions(state.data, action.payload)};

        case SurveyTypes.ADD_SURVEY_QUESTION:
            return {...state, data: addQuestion(state.data, action.payload)};

        case SurveyTypes.FETCH_SURVEYS_START:
            return {...state, isFetching: true};  
            
                
        case SurveyTypes.FETCH_SURVEYS_SUCCESS:
            return {...state, isFetching: false, data: action.payload};  


        case SurveyTypes.FETCH_SURVEYS_FAILURE:
            return {...state, isFetching: false, errorMessage: action.payload};  
        
        default:
            return state;
    
    }

}