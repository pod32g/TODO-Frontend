import { Typography } from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import INoElementsProps from './NoElements.props'
import './NoElements.scss'

export const NoElements: FunctionComponent<INoElementsProps> = ({ user }) => {
    return (
        <div className="no-element-container">
            <Typography>
                {
                    user ? "There's nothing to show, press the '+' button to add a new TODO" :
                        "Please note, this is a Demo session, the TODO notes added here will be lost once you exit the page"
                }
            </Typography>
        </div>
    )
}