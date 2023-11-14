"use client";

import React, { Children, useRef, type ReactNode } from "react";
import { ImCross } from "react-icons/im";
import { useOutSideClick } from "./modalContext";

interface ModalProps {
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
  const ref = useRef<HTMLDivElement>(null);
  useOutSideClick(ref, onClose);
  if (!isOpen) return null;
  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div
          ref={ref}
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        >
          <button
            type="button"
            className="absolute right-0 top-0 p-4"
            onClick={onClose}
          >
            <ImCross />
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};
// interface ModalContentProps {
//   children: ReactNode[];
// }

// const ModalContent: React.FC<ModalContentProps> = ({ children }) => {
//   const [header, body, footer] = Children.toArray(children);
//   return (
//     <>
//       {header && <div>Modal header</div>}
//       {body && <div>Modal body</div>}
//       {footer && <div>Modal footer</div>}
//     </>
//   );
// };

interface ModalHeaderProps {
  children: ReactNode;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({ children }) => {
  return (
    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">{children}</div>
  );
};

interface ModalBodyProps {
  children: ReactNode;
}

const ModalBody: React.FC<ModalBodyProps> = ({ children }) => {
  return (
    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">{children}</div>
  );
};

interface ModalFooterProps {
  children: ReactNode;
}

const ModalFooter: React.FC<ModalFooterProps> = ({ children }) => {
  return (
    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
      {children}
    </div>
  );
};

export { Modal, ModalBody, ModalFooter, ModalHeader };
