import React, { memo, useCallback } from 'react';
import { MODAL_TYPES } from '../../constants/modals';
import { closeModal } from '../../actions/modal';
import LoginModal from './LoginModal';
import { useStoreState } from '../../store';

const { LOGIN } = MODAL_TYPES;

const MODAL_MAPPING = {
  [LOGIN]: LoginModal,
};

const ModalWrapper = memo(() => {
  const [{ modal }, dispatch] = useStoreState();
  const onClose = useCallback(() => dispatch(closeModal()), [dispatch]);
  const ModalToRender = MODAL_MAPPING[modal.type];

  return ModalToRender ? <ModalToRender onClose={onClose} /> : null;
});

export default ModalWrapper;
