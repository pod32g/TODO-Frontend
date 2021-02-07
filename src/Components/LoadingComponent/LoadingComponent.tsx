import { CircularProgress, Modal, Typography } from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'
import rootReducer from '../../Store/Reducers'
import './LoadingComponent.scss'


export const LoadingComponent: FunctionComponent = () => {

    const { loading } = useSelector((state: ReturnType<typeof rootReducer>) => state.loading)

    return (
        <Modal open={loading}>
            <div className="loading-container modal-center">
                <div className="content">
                    <Typography>Loading, please wait</Typography>
                    <CircularProgress className="progress" />
                </div>
            </div>
        </Modal>
    )
}