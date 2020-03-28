import React, { useState, useEffect, useContext } from 'react';
import Input from '../../components/commons/input';
import Button from '../../components/commons/button';
import { login } from '../../services/authentication';
import localStorageService from '../../services/localStorage';
import { AuthenticationContext } from '../../contexts/authentication';
import logo from '../../assets/images/new-logotype-negative.png'
import './login.scss';

export default function Login() {
  const initialLoginForm = {
    username: '',
    password: '',
  }
  
  const [loginForm, setLoginForm] = useState(initialLoginForm);
  const [ , setAuthentication ] = useContext(AuthenticationContext);

  function handleOnChange(e) {    
    setLoginForm({
      ...loginForm,
      [e.target.id] : e.target.value
    })    
  }

  function handleClick(e) {
    e.preventDefault();
    
    login(loginForm.username, loginForm.password)
      .then(({ data: {token} }) => {        
        localStorageService.setAuth(token);
        setAuthentication(token)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <div className="billin-login-page">
      <div className="billin-login">
        <h1>
          <a href="/"><img alt="Billin logo" src={ logo } /></a>
        </h1>
        <form>
          <h2>¡Hola de nuevo!</h2>
          <p>Introduce tus datos para seguir facturando</p>
          <Input placeholder="Escribe tu usuario"
              type="text"
              value={ loginForm.username }
              id="username"
              onChange={ handleOnChange } />
          <Input placeholder="Escribe tu contraseña"
              type="password"
              value={ loginForm.password }
              id="password"
              onChange={ handleOnChange } />
          <Button onClick={ handleClick } text="Entra"/>
        </form>
      </div>
    </div>
  );
}