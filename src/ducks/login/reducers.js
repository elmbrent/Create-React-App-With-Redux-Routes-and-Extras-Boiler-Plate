import {combineReducers} from 'redux';
import types from './types';


const loginReducer = (state = {
   loggedIn : false,
   authKey : false
}, action) => {
    switch (action.type) {
        case types.LOGGING_IN:
          return {
            ...state,
              'loggedIn' : action.payload.key,
              'authKey' : action.payload.type,
          }
        default:
          return state;
    }
};


const loginFormInputsReducer = (
  state = {
      username : '',
      password : '',
      valid : false
    }, action) => {
    switch (action.type) {
        case types.UPDATE_INPUT:
          //console.log(state);
            return {
              ...state, [action.payload.type] : action.payload.key
            }
          case types.VALDATION_UPDATE:
            return {
              ...state, 'valid' : action.payload.key
            }
        default:
            return state;
    }
}


const reducer = combineReducers({
  'loginReducer': loginReducer,
  'loginInputsReducer' : loginFormInputsReducer
});

export default reducer;
