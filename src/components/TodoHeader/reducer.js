const initialState = {
  inputText: '',
  isLoading: false,
};

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_INPUTTEXT':
      return {
        ...state,
        inputText: action.inputText
      };
    case 'SET_LOADING_STATUS':
      return {
        ...state,
        isLoading: action.status
      };
    default:
      return state;
  }
};

export default headerReducer;