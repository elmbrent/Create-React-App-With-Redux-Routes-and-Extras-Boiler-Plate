import types from './types';


const toggleMenu = (key, type) => ({
    type: types.MENU_TOGGLE,
    payload: { key, type }
});


export default {
  toggleMenu,
};
