import { Button, Modal, Typography } from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import rootReducer from '../../Store/Reducers'
import { ErrorHandling } from '../../Store/Types/Error'
import './ErrorComponent.scss'

export const ErrorComponent: FunctionComponent = () => {
    const { message, show } = useSelector((state: ReturnType<typeof rootReducer>) => state.error)
    const dispatch = useDispatch()

    const handleDismiss = () => dispatch({ type: ErrorHandling.HideMessage })


    return (
        <Modal open={show}>
            <div className="error-container modal-center">
                <div className="content">
                    <div className="words-container">
                        <Typography variant="h5">Error</Typography>
                        <Typography className="message">{message}</Typography>
                    </div>
                    <Button variant="outlined" color="secondary" onClick={handleDismiss}>Dismiss</Button>
                </div>
            </div>
        </Modal>
    )
}