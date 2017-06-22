import types from './types';

const startLogin = () => ({
    type: types.START_LOGIN,
});

const updateInput = (key, type) => ({
    type: types.UPDATE_INPUT,
    payload: { key, type }
});


export default {
  startLogin,
  updateInput
};
