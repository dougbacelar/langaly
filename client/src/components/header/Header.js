import React, { memo, useCallback } from 'react';

import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/styles';

import { useDispatch } from '../../store';
import { openModal } from '../../actions/modal';
import { APP_NAME } from '../../constants';
import { MODAL_TYPES } from '../../constants/modals';
import { HOME_LOGO_URL } from '../../constants/urls';

const useStyles = makeStyles({
  header: {
    backgroundColor: 'transparent',
  },
  mainImage: {
    width: '100%',
  },
  title: {
    cursor: 'pointer',
  },
  toolbar: {
    justifyContent: 'space-between',
  },
});

const Header = memo(() => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const onClick = useCallback(() => dispatch(openModal(MODAL_TYPES.LOGIN)), [
    dispatch,
  ]);

  return (
    <div>
      <AppBar className={classes.header} position='static'>
        <Toolbar className={classes.toolbar}>
          <Link
            className={classes.title}
            href={HOME_LOGO_URL}
            rel='noopener'
            underline='none'
            variant='h5'>
            {APP_NAME}
          </Link>
          <Button variant='contained' color='primary' onClick={onClick}>
            Sign In
          </Button>
        </Toolbar>
      </AppBar>
      <picture>
        <img
          className={classes.mainImage}
          src={require('../../assets/images/main.jpg')}
          alt='Two people talking in a coffee shop'
        />
      </picture>
    </div>
  );
});

export default Header;
