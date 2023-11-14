import { Toaster } from "react-hot-toast";

// Create the Toast component
const Toast = () => {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      toastOptions={{
        // Define default options
        style: {
          margin: "40px",
          background: "#363636",
          color: "#fff",
          zIndex: 1,
        },
        duration: 5000,
        // Default options for specific types
        success: {
          duration: 3000,
          style: {
            background: "green",
            color: "black",
          },
        },
      }}
    />
  );
};

export default Toast;
