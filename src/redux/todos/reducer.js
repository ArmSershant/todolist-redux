import myState from "./state"
function reducer(state = myState, action) {
  switch (action.type) {
    case "COMPLETE_TASK":
      return {
        todos: state.todos.map((task) =>
          task.id === action.payload ? { ...task, completed: true } : task
        ),
      }
    case "ACTIVATE_TASK":
      return {
        todos: state.todos.map((task) =>
          task.id === action.payload ? { ...task, completed: false } : task
        ),
      }
    case "ADD_NEW_TASK":
      return {
        todos: [
          {
            id: Date.now(),
            completed: false,
            text: action.payload,
          },
          ...state.todos,
        ],
      }
    case "DELETE_TODO":
      return {
        todos: [...state.todos.filter((todo) => todo.id !== action.payload)],
      }
    default:
      return state
  }
}
export default reducer
