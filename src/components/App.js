import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import logo from '../assets/logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <Button variant='contained' color='primary'>
            Hello world
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
  }
}

export default App;
