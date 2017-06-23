import types from './types';

const startLogin = () => ({
    type: types.START_LOGIN,
});

const updateInput = (key, type) => ({
    type: types.UPDATE_INPUT,
    payload: { key, type }
});


const validationUpdate = (key, type) => ({
    type: types.VALDATION_UPDATE,
    payload: { key, type }
});


const loggingIn = (key, type) => ({
  type: types.LOGGING_IN,
  payload: { key, type }
});


export default {
  startLogin,
  updateInput,
  validationUpdate,
  loggingIn
};
