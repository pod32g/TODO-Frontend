import React, { FunctionComponent, useState } from 'react'
import { NoElements, TodoCard } from '../../Components'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import { useDispatch, useSelector } from 'react-redux'
import rootReducer from '../../Store/Reducers';
import './Home.scss'
import { filterTodos } from '../../Store/Actions/todoActions'
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab'
import { TodoForm } from '../TodoForm/TodoForm'
import ITodo from '../../Util/Types/TodoInfo'

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

    return (
        <div className="container">
            <ToggleButtonGroup className="filter-toggle" value={filter} exclusive onChange={handleToggle}>
                <ToggleButton value="all">All</ToggleButton>
                <ToggleButton value="pending">Pending</ToggleButton>
                <ToggleButton value="done">Done</ToggleButton>
            </ToggleButtonGroup>
            <TodoForm el={editElement} show={newTodo} onClose={() => showNewTodo(false)} />

            <Fab color="primary" aria-label="add" className="new-btn" onClick={() => {
                showNewTodo(true)
            }}>
                <AddIcon />
            </Fab>
            {
                filteredTodos.length === 0 ?
                    <NoElements user={user} />
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