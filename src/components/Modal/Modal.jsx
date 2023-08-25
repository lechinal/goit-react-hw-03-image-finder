import React from 'react';

const Modal = ({ isOpen, onClose, largeImageURL, alt }) => (
  <div className={`overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
    <div className="modal">
      <img src={largeImageURL} alt={alt} />
    </div>
  </div>
);

export default Modal;
