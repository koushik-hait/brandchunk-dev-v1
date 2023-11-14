"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

// Define the shape of the context
interface ModalContextProps {
  isModalOpen: boolean;
  modalType: string | null;
  openModal: (type: string) => void;
  closeModal: () => void;
}

// Create the context
const ModalContext = createContext<ModalContextProps | undefined>(undefined);

// Create a provider component
export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<string | null>(null);

  const openModal = (type: string) => {
    setModalType(type || "default");
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setModalType(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <ModalContext.Provider
        value={{ isModalOpen, modalType, openModal, closeModal }}
      >
        {children}
      </ModalContext.Provider>
    </>
  );
};

// Create a custom hook to use the modal context
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

export const useOutSideClick = (
  ref: React.RefObject<HTMLElement>,
  callback: () => void
) => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref && ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};
