import React, { FunctionComponent } from 'react'
import './Login.scss'

export const Login: FunctionComponent = () => {
    return (
        <div className="login-container">
            <div className="form">
                <p className="title">Login</p>
                <div className="inputs">
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button className="login-btn">Login</button>
                </div>
            </div>
        </div>
    )
}