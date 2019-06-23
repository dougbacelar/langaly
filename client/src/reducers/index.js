import modal from './modal';

const mainReducer = (state = {}, action = {}) => ({
  modal: modal(state.modal, action),
});

export default mainReducer;
