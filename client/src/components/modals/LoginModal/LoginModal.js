import React, { memo } from 'react';
import Dialog from '@material-ui/core/Dialog';
import FacebookButton from './buttons/FacebookButton';

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import ModalCloseButton from '../ModalCloseButton';

const LoginModal = memo(({ onClose }) => (
  <Dialog onClose={onClose} open={true} maxWidth='xs' fullWidth={true}>
    <DialogTitle id='max-width-dialog-title'>Login</DialogTitle>
    <DialogContent>
      <FacebookButton />
    </DialogContent>
    <DialogActions>
      <ModalCloseButton />
    </DialogActions>
  </Dialog>
));

export default LoginModal;
