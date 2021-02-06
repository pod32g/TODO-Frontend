import { AppBar, Button, makeStyles, Toolbar, Typography } from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}));

export const NavBar: FunctionComponent = () => {

    const classes = useStyles();
    const navigation = useHistory()

    const login = () => {
        navigation.push('/login')
    }

    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    TODO
                </Typography>
                <Button onClick={login} color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
}

