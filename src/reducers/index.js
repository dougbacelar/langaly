import modal from './modal';

export const initialState = {
  modal: modal.initialState,
};

export const mainReducer = (state, action) => {
  return {
    modal: modal.reducer(state.modal, action),
  };
};

export default mainReducer;
