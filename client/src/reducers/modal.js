const initialState = { type: null };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MODAL_CLOSE':
      return initialState;
    case 'MODAL_OPEN':
      return {
        type: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
