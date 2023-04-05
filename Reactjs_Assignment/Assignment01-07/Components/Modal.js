import React, { useState } from 'react';

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  }

  const handleCloseModal = () => {
    setIsOpen(false);
  }

  return (
    <>
      <button onClick={handleOpenModal}>Open Modal</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <p>Modal message goes here</p>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
