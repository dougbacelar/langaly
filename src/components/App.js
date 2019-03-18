import React from 'react';
import Button from '@material-ui/core/Button';
import logo from '../assets/logo.svg';
import './App.css';
import { useStateStore } from '../store';
import { openModal } from '../actions/modal';
import ModalWrapper from './modals/ModalWrapper';
import { MODAL_TYPES } from '../constants/modals';

const App = () => {
  const [_, dispatch] = useStateStore(); // eslint-disable-line no-unused-vars

  return (
    <div className='App'>
      <header className='App-header'>
        <ModalWrapper />
        <img src={logo} className='App-logo' alt='logo' />
        <Button
          variant='contained'
          color='primary'
          onClick={() => dispatch(openModal(MODAL_TYPES.LOGIN))}>
          Sign In
        </Button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
