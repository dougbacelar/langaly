import modal from './modal';

export const mainReducer = (state = {}, action = {}) => ({
  modal: modal(state.modal, action),
});

export default mainReducer;
