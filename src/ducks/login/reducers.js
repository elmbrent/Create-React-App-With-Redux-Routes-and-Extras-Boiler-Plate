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
          case types.LOGGING_OUT:
            return {
              ...state,
                'loggedIn' : false,
                'authKey' :  false,
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
          case types.LOGGING_OUT:
              return {
                ...state,
                  'username' : '',
                  'password' : '',
                  'valid' :  false,
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
