import actions from './actions';
import axios from 'axios';

const validate = () => (dispatch, getState) => {
  let validForm = true;
  Object.keys(getState().login.loginInputsReducer).forEach(function(key) {
      if((getState().login.loginInputsReducer[key] == "") && (getState().login.loginInputsReducer[key] !== false)){
          validForm = false;
          dispatch(actions.validationUpdate(false));
      }
  });

  if(validForm){
    dispatch(actions.validationUpdate(true));
  }
}

const submit = () => (dispatch, getState) => {
  dispatch(actions.loggingIn(true, 'someauthkey'));
}


export default {
  validate : validate,
  updateInput: actions.updateInput,
  submit : submit
};
