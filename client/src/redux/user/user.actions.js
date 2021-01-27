
import UserActionTypes from './user.types';


export const setCurrentUser = user => {
    console.log(UserActionTypes.SET_CURRENT_USER);
    return{
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
    }
}

