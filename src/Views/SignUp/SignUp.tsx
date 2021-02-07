import React, { FunctionComponent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { SignUp as signUpAction } from '../../Store/Actions/authenticationActions'
import rootReducer from '../../Store/Reducers'
import './SignUp.scss'

export const SignUp: FunctionComponent = () => {

    const { token } = useSelector((state: ReturnType<typeof rootReducer>) => state.authentication)
    const navigation = useHistory()
    const dispatch = useDispatch()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')


    const handleSignUp = () => {
        dispatch(signUpAction(username, password, email))
    }

    useEffect(() => {
        if (!token) return
        navigation.replace('/')
    }, [token, navigation])

    return (
        <div className="signup-container">
            <div className="form">
                <p className="title" id='title'>Sign Up</p>
                <div className="inputs" id="form">
                    <input type="text" placeholder="Username" id='user-input' onChange={(e) => setUsername(e.target.value)} />
                    <input type="email" placeholder="Email" id='email-input' onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" id='pass-input' onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={handleSignUp} className="login-btn" id='login-btn'>Sign up</button>
                </div>
            </div>
        </div>
    )
}