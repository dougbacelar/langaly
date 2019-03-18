import React from 'react';

import './App.css';
import ModalWrapper from './modals/ModalWrapper';
import Header from './header/Header';
import logo from '../assets/logo.svg';

const App = () => (
  <div className='app'>
    <ModalWrapper />
    <Header />
    <img src={logo} className='app-logo' alt='logo' />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
);

export default App;
