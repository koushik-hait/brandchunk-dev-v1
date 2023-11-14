import React from "react";

const Logo = ({ logoText = "BarndChunk", width = "100px" }) => {
  return (
    <div
      className={`w-[${width}] flex items-center bg-white text-black dark:bg-black dark:text-white `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-10 h-10 mx-3 text-white px-2  bg-pink-600 rounded-full"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-0 text-l text-gray-950 dark:text-white">
        {logoText}
      </span>
      {/* <p className="hidden sm:block font-bold text-inherit">BrandChunk</p> */}
    </div>
  );
};

export default Logo;
