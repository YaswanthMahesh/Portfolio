import React from 'react'

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <div className={`fixed inset-0 m-1 flex items-center justify-center ${isOpen ? 'visible' : 'invisible'}`}>
    <div className="modal-overlay fixed inset-0 bg-black opacity-80"></div>
    <div className="modal-container bg-white w-auto p-4 rounded shadow-lg relative">
      <button className="modal-close-btn absolute top-2 right-2 px-4 py-1 text-lg bg-gray-700 rounded-md text-white" onClick={onClose}>
        &times;
      </button>
     {children}
    </div>
  </div>
  )
}

export default Modal
