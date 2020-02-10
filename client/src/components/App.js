import React, { useEffect } from 'react';

import ModalWrapper from './modals/ModalWrapper';
import Header from './header/Header';

const FACEBOOK_REDIRECT_HASH = '#_=_';
const useUrlCleaner = () => {
  useEffect(() => {
    if (window.location.hash === FACEBOOK_REDIRECT_HASH) {
      // removes hash from URL
      window.history.replaceState(null, null, ' ');
    }
  }, []);
};

const App = () => {
  useUrlCleaner();

  return (
    <div className='app'>
      <ModalWrapper />
      <Header />
    </div>
  );
};

export default App;
