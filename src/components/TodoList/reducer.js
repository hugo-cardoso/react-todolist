const initialState = {
  todos: [],
  filteredTodos: [],
  filterIsActive: false,
  selectedFilter: 'ALL',
};

const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TODOS':
      return {
        ...state,
        todos: action.todos
      };
    case 'SET_FILTERED_TODOS':
      return {
        ...state,
        filteredTodos: action.todos
      };
    case 'SET_FILTER_IS_ACTIVE':
      return {
        ...state,
        filterIsActive: action.status
      }
    case 'SET_SELECTED_FILTER':
      return {
        ...state,
        selectedFilter: action.filter
      }
    default:
      return state;
  }
};

export default todoListReducer;