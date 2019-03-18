import React, { memo, useCallback } from 'react';

import './Header.css';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { useStoreState } from '../../store';
import { openModal } from '../../actions/modal';
import { APP_NAME } from '../../constants';
import { MODAL_TYPES } from '../../constants/modals';

const Header = memo(() => {
  const dispatch = useStoreState()[1];
  const onClick = useCallback(() => dispatch(openModal(MODAL_TYPES.LOGIN)));

  return (
    <div>
      <AppBar className='header' position='static'>
        <Toolbar>
          <Typography align='left' className='title' variant='h5'>
            {APP_NAME}
          </Typography>
          <Button variant='contained' color='primary' onClick={onClick}>
            Sign In
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
});

export default Header;
