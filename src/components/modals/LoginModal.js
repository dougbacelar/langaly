import React, { memo } from 'react';
import Dialog from '@material-ui/core/Dialog';

const LoginModal = memo(({ onClose }) => (
  <Dialog onClose={onClose} open={true}>
    this will be a modal
  </Dialog>
));

export default LoginModal;
