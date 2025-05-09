import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-md shadow-lg">
        <h2 className="text-xl font-bold mb-4">Título do Modal</h2>
        <p>Conteúdo do modal vai aqui.</p>
        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white p-2 rounded-md"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default Modal;