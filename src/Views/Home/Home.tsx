import React, { FunctionComponent, useEffect, useState } from 'react'
import { NoElements, TodoCard } from '../../Components'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import { useDispatch, useSelector } from 'react-redux'
import rootReducer from '../../Store/Reducers';
import { filterTodos, getTodos } from '../../Store/Actions/todoActions'
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab'
import { TodoForm } from '../TodoForm/TodoForm'
import ITodo from '../../Util/Types/TodoInfo'
import './Home.scss'

export const Home: FunctionComponent = () => {

    const dispatch = useDispatch()
    const { filteredTodos } = useSelector((state: ReturnType<typeof rootReducer>) => state.todo)
    const user = useSelector((state: ReturnType<typeof rootReducer>) => state.authentication.user)
    const [filter, setFilter] = useState('all')
    const [newTodo, showNewTodo] = useState(false);
    const [editElement, setEditElement] = useState<ITodo | undefined>()

    const handleToggle = (_: React.MouseEvent<HTMLElement>, newFilter: string) => {
        setFilter(newFilter)

        dispatch(filterTodos(newFilter))
    }

    useEffect(() => {
        if (user) dispatch(getTodos())
    }, [user, dispatch])


    return (
        <div className="container">
            <ToggleButtonGroup className="filter-toggle" value={filter} exclusive onChange={handleToggle}>
                <ToggleButton key="filter-all" id="filter-all" value="all">All</ToggleButton>
                <ToggleButton key="filter-pending" id="filter-pending" value="pending">Pending</ToggleButton>
                <ToggleButton key="filter-done" id="filter-done" value="done">Done</ToggleButton>
            </ToggleButtonGroup>
            <TodoForm el={editElement} show={newTodo} onClose={() => {
                showNewTodo(false)
                setEditElement(undefined)
            }} />

            <Fab id="add-btn" color="primary" aria-label="add" className="new-btn" onClick={() => {
                setEditElement(undefined)
                showNewTodo(true)
            }}>
                <AddIcon />
            </Fab>
            {
                filteredTodos.length === 0 ?
                    <NoElements key="no-elements" user={user} />
                    :
                    <ul>
                        {
                            filteredTodos.map(el => (
                                <li>
                                    <TodoCard
                                        onEdit={() => {
                                            setEditElement(el)
                                            showNewTodo(true)
                                        }}
                                        className="card"
                                        key={`todo-${el.id}`}
                                        {...el}
                                    />
                                </li>
                            ))
                        }
                    </ul>
            }
        </div >
    )
}