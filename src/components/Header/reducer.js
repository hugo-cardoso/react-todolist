const initialState = {
  inputText: ''
};

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_INPUTTEXT':
      return {
        ...state,
        inputText: action.inputText
      };
    default:
      return state;
  }
};

export default headerReducer;