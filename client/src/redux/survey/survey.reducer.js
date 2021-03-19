import { SaveSurvey, EditSurvey } from "./survey.actions";
import { SurveyTypes } from "./survey.types";
import { EditSurveyQuestions } from './survey.util';


const INITIAL_STATE = {
    surveys: [],
    isFetching: false,
    errorMessage:{}
}

export const SurveyReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SurveyTypes.SAVE_SURVEY:
            return {...state, surveys: SaveSurvey(action.payload)};
    
        case SurveyTypes.EDIT_SURVEY:
            return {...state, surveys: EditSurveyQuestions(state.surveys, action.payload)};
        
        case SurveyTypes.FETCH_SURVEYS_START:
            return {...state, isFetching: true};  
            
                
        case SurveyTypes.FETCH_SURVEYS_SUCCESS:
            return {...state, isFetching: false, surveys: action.payload};  


        case SurveyTypes.FETCH_SURVEYS_FAILURE:
            return {...state, isFetching: false, errorMessage: action.payload};  
        
        default:
            return state;
    
    }

}