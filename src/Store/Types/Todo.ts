import ActionMap from "../../Util/ActionMap";
import ITodo from "../../Util/Types/TodoInfo";

export enum Todo {
    Add_Todo = 'ADD_TODO',
    Toggle_Todo = 'TOGGLE_TODO',
    Set_Filtered_Todos = 'SET_FILTERED_TODOS',
    Set_Todos = 'SET_TODOS'
}

export interface ITodoState {
    todos: ITodo[],
    filteredTodos: ITodo[]
}

type TodoPayload = {
    [Todo.Add_Todo]: {
        todo: ITodo
    },
    [Todo.Toggle_Todo]: {
        id: string,
        status: "completed" | "todo"
    },
    [Todo.Set_Filtered_Todos]: {
        todos: ITodo[]
    }
    [Todo.Set_Todos]: {
        todos: ITodo[]
    }
}

export type TodoActions = ActionMap<TodoPayload>[keyof ActionMap<TodoPayload>]