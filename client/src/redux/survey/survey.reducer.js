import { SaveSurvey, EditSurvey } from "./survey.actions";
import { SurveyTypes } from "./survey.types";
import { EditSurveyQuestions } from './survey.util';


const INITIAL_STATE = {
    surveys: {}
}

export const SurveyReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SurveyTypes.SAVE_SURVEY:
            return {...state, surveys: SaveSurvey(action.payload)};
    
        case SurveyTypes.EDIT_SURVEY:
            return {...state, surveys: EditSurveyQuestions(state.surveys, action.payload)};

        case SurveyTypes.LOAD_SURVEYS:
            return {...state, surveys: action.payload};  
        
        default:
            return state;
    
    }

}