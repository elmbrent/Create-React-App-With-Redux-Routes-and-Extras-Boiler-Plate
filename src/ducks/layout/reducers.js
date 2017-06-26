import {combineReducers} from 'redux';
import types from './types';


const toggleMenuReducer = (state = {
   isOpen : true,
}, action) => {
    switch (action.type) {
        case types.MENU_TOGGLE:

          let newState = true;
          if(state.isOpen == true){
              newState = false;
          }
          
          return {
            ...state,
              'isOpen' : newState
          }

        default:
          return state;
    }
};

const reducer = combineReducers({
  'toggleMenuReducer': toggleMenuReducer
});

export default reducer;
