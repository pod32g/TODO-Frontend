import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ErrorComponent, LoadingComponent } from './Components';
import Router from './Router/Router';
import './App.scss'
import { useDispatch } from 'react-redux';
import { Authentication } from './Store/Types/Authentication';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    const user = localStorage.getItem('user')
    const token = localStorage.getItem('token')

    if (user && token) {
      dispatch({
        type: Authentication.Login,
        payload: {
          token: token,
          user: user
        }
      })
    }
  })

  return (
    <BrowserRouter>
      <LoadingComponent />
      <ErrorComponent />
      <Router />
    </BrowserRouter>
  );
}

export default App;
