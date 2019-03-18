import React, { memo } from 'react';
import { MODAL_TYPES } from '../../constants/modals';
import { closeModal } from '../../actions/modal';
import LoginModal from './LoginModal';
import { useStateStore } from '../../store';

const { LOGIN } = MODAL_TYPES;

const MODAL_MAPPING = {
  [LOGIN]: LoginModal,
};

const ModalWrapper = memo(() => {
  const [{ modal }, dispatch] = useStateStore();
  const ModalToRender = MODAL_MAPPING[modal.type];

  return ModalToRender ? (
    <ModalToRender onClose={() => dispatch(closeModal())} />
  ) : null;
});

export default ModalWrapper;
