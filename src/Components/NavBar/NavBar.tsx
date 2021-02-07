import { AppBar, Button, makeStyles, Toolbar, Typography } from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import rootReducer from '../../Store/Reducers'
import { Logout } from '../../Store/Actions/authenticationActions';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}))

export const NavBar: FunctionComponent = () => {

    const classes = useStyles()
    const navigation = useHistory()
    const dispatch = useDispatch()
    const { token } = useSelector((state: ReturnType<typeof rootReducer>) => state.authentication)

    const handleButtonPress = () => {
        if (!token) {
            navigation.push('/login')
            return
        }

        dispatch(Logout())
        navigation.go(0)
    }

    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    TODO-App
                </Typography>
                <Button onClick={handleButtonPress} color="inherit">{token ? 'Logout' : 'Login'}</Button>
                {
                    !token &&
                    <Button onClick={() => navigation.push('/signup')} color="inherit">Sign Up</Button>
                }
            </Toolbar>
        </AppBar>
    )
}
