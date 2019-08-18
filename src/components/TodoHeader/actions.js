export const updateInputText = inputText => ({
  type: 'SET_INPUTTEXT',
  inputText
});

export const setLoadingStatus = status => ({
  type: 'SET_LOADING_STATUS',
  status
});

export const clearInputText = () => dispatch => dispatch(updateInputText(""));