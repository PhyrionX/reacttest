import React, { useState } from 'react';
import { HashRouter as Router, Route, Link, Redirect } from "react-router-dom";
import ContextProvider from './context-provider'
import localStorageService from '../services/localStorage';
import Invoice from './invoice/invoice';
import Login from './login/login';
import Header from '../components/header';


export default function App () {
  const [authentication, setAuthentication] = useState(localStorageService.getToken());

  return (
    <ContextProvider authentication={ [ authentication, setAuthentication ] }>
      { authentication ? (
        <Router>
            <Header />
            <Route path="/" exact component={ Invoice }/>
        </Router>) : <Login /> }
    </ContextProvider>)
}