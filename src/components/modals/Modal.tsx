"use client";

import { useOutSideClick } from "@/contexts/modalContext";
import React, { useRef } from "react";
import { RxCross2 } from "react-icons/rx";

const Modal = ({
  isModalOpen,
  closeModal,
  children,
}: {
  isModalOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useOutSideClick(ref, closeModal);

  return (
    <div
      ref={ref}
      className={`${
        isModalOpen ? "block" : "hidden"
      } w-[80vw] lg:w-[90vw] max-w-xl z-50 mx-auto bg-white flex flex-col fixed top-10 right-20 left-10 self-center shadow-2xl rounded-md`}
    >
      <button
        type="button"
        className="cursor-pointer relative right-0 m-2 P-2 text-black hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
        onClick={closeModal}
      >
        <RxCross2 />
      </button>
      <div>{children}</div>
    </div>
  );
};

export default Modal;
