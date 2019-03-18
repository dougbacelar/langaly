import React, { useCallback } from 'react';
import Button from '@material-ui/core/Button';
import logo from '../assets/logo.svg';
import './App.css';
import { useStoreState } from '../store';
import { openModal } from '../actions/modal';
import ModalWrapper from './modals/ModalWrapper';
import { MODAL_TYPES } from '../constants/modals';

const App = () => {
  const dispatch = useStoreState()[1];
  const onClick = useCallback(() => dispatch(openModal(MODAL_TYPES.LOGIN)));

  return (
    <div className='App'>
      <header className='App-header'>
        <ModalWrapper />
        <img src={logo} className='App-logo' alt='logo' />
        <Button variant='contained' color='primary' onClick={onClick}>
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
