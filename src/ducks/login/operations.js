import actions from './actions';
import axios from 'axios';



const validate = () => (dispatch, getState) => {
  let validForm = true;
  Object.keys(getState().dashboard.formValue).forEach(function(key) {
      if(getState().dashboard.formValue[key] == ""){
          dispatch(actions.inputValidate(key, false));
          validForm = false;
      }else{
          dispatch(actions.inputValidate(key, true));
      }
  });

  if(validForm){

  }
}



export default {
  validate : validate,
  updateInput: actions.updateInput
};
