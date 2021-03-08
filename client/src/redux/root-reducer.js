import { combineReducers } from "redux"
import { userReducer } from "./user/user.reducer";
import { SurveyReducer } from "./survey/survey.reducer";

const rootReducer = combineReducers({
    currentUser: userReducer,
    surveys: SurveyReducer
});

export default rootReducer;


