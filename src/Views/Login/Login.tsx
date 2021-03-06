import React, { FunctionComponent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Login as loginAction } from '../../Store/Actions/authenticationActions'
import rootReducer from '../../Store/Reducers'
import './Login.scss'

export const Login: FunctionComponent = () => {

    const dispatch = useDispatch()
    const { token } = useSelector((state: ReturnType<typeof rootReducer>) => state.authentication)
    const navigation = useHistory()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        dispatch(loginAction(username, password))
    }

    useEffect(() => {
        if (!token) return
        navigation.replace('/')
    }, [token, navigation])

    return (
        <div className="login-container">
            <div className="form" id="login-form">
                <p className="title" id='title'>Login</p>
                <div className="inputs">
                    <input type="text" placeholder="Username" id='user-input' onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" placeholder="Password" id='pass-input' onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={handleLogin} id='login-btn' className="login-btn">Login</button>
                </div>
            </div>
        </div>
    )
}