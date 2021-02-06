import { Modal, TextField } from '@material-ui/core'
import React, { FunctionComponent, useEffect, useState } from 'react'
import ITodoFormProps from './TodoForm.props'
import { useDispatch } from 'react-redux'
import './TodoForm.scss'
import { addTodo } from '../../Store/Actions/todoActions'

export const TodoForm: FunctionComponent<ITodoFormProps> = ({ show, onClose, el }) => {

    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleSave = () => {
        dispatch(addTodo(title, content))
        onClose()
    }

    useEffect(() => {
        if (el) {
            setTitle(el.title)
            setContent(el.content)
        }
    }, [el])


    return (
        <Modal open={show} onClose={onClose}>
            <div className="modal-container">
                <div className="inputs">
                    <TextField className="element" id="standard-basic" label="Title" variant="outlined" value={title} onChange={(event) => setTitle(event.target.value)} />
                    <TextField multiline rows={20} className="element" id="outlined-basic" label="Content" variant="outlined" value={content} onChange={(event) => setContent(event.target.value)} />
                    <button className="save-btn" onClick={handleSave}>Save</button>
                </div>
            </div>
        </Modal>
    )
}