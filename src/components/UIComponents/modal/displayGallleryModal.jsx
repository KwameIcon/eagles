import React from 'react';
import { ModalOverlay, ModalContent, CloseButton } from './displayGalleryModal.styled'; 

const Modal = ({ isOpen, onClose, imageSrc, imageAlt }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>×</CloseButton>
        <img src={imageSrc} alt={imageAlt} style={{ width: '100%', height: 'auto' }} />
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
