"use client";

import { cn } from "@/lib/utils";
import React, {
  Children,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";

// Define the shape of the context
interface DropdownContextProps {
  isOpen: boolean;
  toggleDropdown: () => void;
}
const DropdownContext = createContext<DropdownContextProps | undefined>(
  undefined
);

export const DropdownProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <DropdownContext.Provider value={{ isOpen, toggleDropdown }}>
        {children}
      </DropdownContext.Provider>
    </>
  );
};

export const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

interface DropdownProps {
  children: ReactNode[];
}

const Dropdown: React.FC<DropdownProps> = ({ children }) => {
  const [trigger, content] = Children.toArray(children);

  return (
    <DropdownProvider>
      <div className="relative inline-block text-left">
        {trigger}
        {content}
      </div>
    </DropdownProvider>
  );
};

interface DropdownTriggerProps {
  children?: ReactNode;
}

const DropdownTrigger: React.FC<DropdownTriggerProps> = ({ children }) => {
  const { isOpen, toggleDropdown } = useDropdown();
  return <div onClick={toggleDropdown}>{children}</div>;
};

interface DropdownMenuProps {
  children: ReactNode;
  className?: string;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  children,
  className,
  ...rest
}) => {
  const { isOpen, toggleDropdown } = useDropdown();
  return (
    <>
      {isOpen && (
        <div
          className={cn(
            "origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5",
            className
          )}
          {...rest}
        >
          {children}
        </div>
      )}
    </>
  );
};

interface DropdownItemProps {
  children: ReactNode;
  className?: string;
}

const DropdownItem: React.FC<DropdownItemProps> = ({
  children,
  className,
  ...rest
}) => {
  const { isOpen, toggleDropdown } = useDropdown();
  return (
    <div
      className={cn(
        "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900",
        className
      )}
      onClick={toggleDropdown}
      {...rest}
    >
      {children}
    </div>
  );
};

export { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger };
