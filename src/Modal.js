import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  max-width: 90%;
  max-height: 90%;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #ff0000;
  }
`;

const Modal = ({ src, onClose }) => (
  <ModalOverlay onClick={onClose}>
    <ModalContent onClick={(e) => e.stopPropagation()}>
      <CloseButton onClick={onClose}>×</CloseButton>
      <Image src={src} alt="Enlarged content" />
    </ModalContent>
  </ModalOverlay>
);

export default Modal;
