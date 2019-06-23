import React, { memo, useCallback } from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch } from '../../store';
import { closeModal } from '../../actions/modal';

const ModalCloseButton = memo(() => {
  const dispatch = useDispatch();
  const handleClick = useCallback(() => dispatch(closeModal()), [dispatch]);

  return (
    <Button onClick={handleClick} color='primary'>
      Cancel
    </Button>
  );
});

export default ModalCloseButton;
