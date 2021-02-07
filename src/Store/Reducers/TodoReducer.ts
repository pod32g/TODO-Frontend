import { ITodoState, Todo, TodoActions } from "../Types/Todo";

const initialState: ITodoState = {
    todos: [],
    filteredTodos: []
}

const todoReducer = (state: ITodoState = initialState, actions: TodoActions): ITodoState => {
    switch (actions.type) {
        case Todo.Add_Todo:
            return {
                ...state,
                todos: [...state.todos, actions.payload.todo],
                filteredTodos: [...state.filteredTodos, actions.payload.todo]
            }
        case Todo.Toggle_Todo:
            state.todos.forEach(el => {
                if (el.id === actions.payload.id) el.status = actions.payload.status
            })
            return state
        case Todo.Set_Filtered_Todos:
            return {
                ...state,
                filteredTodos: actions.payload.todos
            }
        case Todo.Set_Todos:
            return {
                ...state,
                todos: actions.payload.todos,
                filteredTodos: actions.payload.todos
            }
        default:
            return state
    }
}

export default todoReducer;