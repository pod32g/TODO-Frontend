import { Dispatch } from "redux";
import ITodo from "../../Util/Types/TodoInfo";
import { Todo } from "../Types/Todo";
import Store from '../index'
import moment from "moment";
import { Loading } from "../Types/Loading";
import RestService from "../../Services/RestService";
import { ErrorHandling } from "../Types/Error";

export function addTodo(title: string, content: string) {

    const { token } = Store.getState().authentication

    if (token) return async function (dispatch: Dispatch) {
        try {
            dispatch({
                type: Loading.StartLoading
            })

            const resp = await new RestService({
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
                .POST('todo/', { title: title, content: content })
            dispatch({
                type: Todo.Add_Todo,
                payload: {
                    todo: resp.data
                }
            })
            dispatch({
                type: Loading.StopLoading
            })
        } catch (error) {
            dispatch({
                type: Loading.StopLoading
            })

            dispatch({
                type: ErrorHandling.ShowMessage,
                payload: {
                    message: error.response.data.error
                }
            })
        }
    }

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
    const { todos, filteredTodos } = Store.getState().todo
    const { token } = Store.getState().authentication

    return async function (dispatch: Dispatch) {
        try {
            const todosTemp = todos
            dispatch({
                type: Loading.StartLoading
            })
            if (token) {
                const todo = todos.filter(el => el.id === id)[0]

                todo.status = status

                await new RestService({
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                })
                    .PUT('todo/', todo)
            }

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

            dispatch({
                type: Loading.StopLoading
            })
        } catch (error) {
            dispatch({
                type: Loading.StopLoading
            })

            dispatch({
                type: ErrorHandling.ShowMessage,
                payload: {
                    message: error.response.data.error
                }
            })
        }
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

export function getTodos() {
    return async function (dispatch: Dispatch) {
        const { token } = Store.getState().authentication
        try {
            dispatch({
                type: Loading.StartLoading
            })

            const resp = await new RestService({
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
                .GET('todo/')

            dispatch({
                type: Todo.Set_Todos,
                payload: {
                    todos: resp.data.todos
                }
            })

            dispatch({
                type: Loading.StopLoading
            })
        } catch (error) {
            dispatch({
                type: Loading.StopLoading
            })

            dispatch({
                type: ErrorHandling.ShowMessage,
                payload: {
                    message: error.response.data.error
                }
            })
        }
    }
}

export function editTodo(el: ITodo, title: string, content: string) {
    return async function (dispatch: Dispatch) {
        const { token } = Store.getState().authentication
        const { todos } = Store.getState().todo

        try {
            const todo = el
            const aux = todos

            todo.title = title
            todo.content = content

            dispatch({
                type: Loading.StartLoading
            })

            if (token) {
                await new RestService({
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                })
                    .PUT('todo/', todo)
            }

            aux.forEach(value => {
                if (value.id === el.id) {
                    value.content = content
                    value.title = title
                }
            })

            dispatch({
                type: Todo.Set_Todos,
                payload: {
                    todos: aux
                }
            })

            dispatch({
                type: Todo.Set_Filtered_Todos,
                payload: {
                    todos: aux
                }
            })

            dispatch({
                type: Loading.StopLoading
            })

        } catch (error) {
            dispatch({
                type: Loading.StopLoading
            })

            dispatch({
                type: ErrorHandling.ShowMessage,
                payload: {
                    message: error.response.data.error
                }
            })
        }
    }
}