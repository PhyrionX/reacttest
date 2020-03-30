import React, { useContext } from 'react';
import { AuthenticationContext } from '../contexts/authentication';
import logo from '../assets/images/new-logotype-negative.png'
import './header.scss'
import localStorageService from '../services/localStorage';

export default function Header() {
  const [ , setAuthentication ] = useContext(AuthenticationContext);

  function handleLogout() {
    setAuthentication(null);
    localStorageService.deleteAuth();
  }

  return (
    <nav className="navbar">
      <a href="/"><img alt="Billin logo" src={ logo } /></a>
      <span className="billing-logout" onClick={ handleLogout }>Logout</span>
    </nav>
  )
}
