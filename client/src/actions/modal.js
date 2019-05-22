export const closeModal = () => ({
  type: 'MODAL_CLOSE',
});

export const openModal = (modalType) => ({
  payload: modalType,
  type: 'MODAL_OPEN',
});
