import {combineReducers} from 'redux';
import types from './types';


const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case types.APP_UPDATE:
            return {
                ...state,
                [action.payload.key]: action.payload.data,
            };
        default:
          return state;
    }
};


const loginFormInputsReducer = (
  state = {
      username : '',
      password : ''
    }, action) => {
    switch (action.type) {
        case types.UPDATE_INPUT:
          console.log(state);
            return {
              ...state, [action.payload.type] : action.payload.key
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
