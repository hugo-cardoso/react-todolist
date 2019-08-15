export const updateInputText = inputText => ({
  type: 'SET_INPUTTEXT',
  inputText
});

export const clearInputText = () => dispatch => dispatch(updateInputText(""));