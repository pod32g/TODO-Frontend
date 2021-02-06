import { Dispatch } from "redux";
import ITodo from "../../Util/Types/TodoInfo";
import { Todo } from "../Types/Todo";
import Store from '../index'
import moment from "moment";

export function addTodo(title: string, content: string) {
    return function (dispatch: Dispatch) {

        const _todo: ITodo = {
            title: title,
            content: content,
            id: `${Math.floor(Math.random() * 10)}`,
            status: 'todo',
            date: moment().format("MMM Do YY")
        }

        dispatch({
            type: Todo.Add_Todo,
            payload: {
                todo: _todo
            }
        })
    }
}

export function changeTodoStatus(id: string, status: "todo" | "completed") {
    return function (dispatch: Dispatch) {
        const { todos, filteredTodos } = Store.getState().todo

        //TODO: Replace this with an api call
        const todosTemp = todos

        todosTemp.forEach(el => {
            if (el.id === id) {
                el.status = status
            }
        })


        dispatch({
            type: Todo.Set_Todos,
            payload: {
                todos: todosTemp
            }
        })

        const filteredTemp = filteredTodos

        filteredTemp.forEach(el => {
            if (el.id === id) {
                el.status = status
            }
        })

        dispatch({
            type: Todo.Set_Filtered_Todos,
            payload: {
                todos: filteredTemp
            }
        })
    }
}

export function filterTodos(filter: string) {
    return function (dispatch: Dispatch) {

        const { todos } = Store.getState().todo

        if (filter === 'all') {
            dispatch({
                type: Todo.Set_Filtered_Todos,
                payload: {
                    todos: todos
                }
            })
        }
        else if (filter === 'pending') {
            dispatch({
                type: Todo.Set_Filtered_Todos,
                payload: {
                    todos: todos.filter(el => el.status === 'todo')
                }
            })
        } else {
            dispatch({
                type: Todo.Set_Filtered_Todos,
                payload: {
                    todos: todos.filter(el => el.status === 'completed')
                }
            })
        }
    }
}