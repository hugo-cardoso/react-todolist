const initialState = {
  todos: []
};

const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TODOS':
      return {
        ...state,
        todos: action.todos
      };
    default:
      return state;
  }
};

export default todoListReducer;