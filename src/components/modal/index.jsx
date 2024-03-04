import React from 'react';
import { HiOutlineArrowCircleLeft } from 'react-icons/hi';
import { ModalContainer, ModalContent, ModalOverlay, ModalWrap } from './styles';
import PropTypes from 'prop-types';

const Modal = ({ children, openModal, setOpenModal, hideDefaultCancel }) => {
  return (
    <ModalContainer display={openModal.toString()}>
      <ModalOverlay className="bg-[#00000095]" />
      <ModalWrap>
        {!hideDefaultCancel && (
          <div className="back close__modal" onClick={() => setOpenModal(false)}>
            <HiOutlineArrowCircleLeft />
            <p>Back</p>
          </div>
        )}
        <ModalContent>{children}</ModalContent>
      </ModalWrap>
    </ModalContainer>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  openModal: PropTypes.bool,
  setOpenModal: PropTypes.func,
  hideDefaultCancel: PropTypes.bool,
};

export default Modal;