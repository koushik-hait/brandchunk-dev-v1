import React from "react";

const CountryComponent = () => {
  return (
    <>
      <div className="relative inline-flex mx-1">
        <select
          defaultValue={"English"}
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value={"English"}>English</option>
          <option value={"中文"}>中文</option>
          <option value={"日本語"}>日本語</option>
          <option value={"Español"}>Español</option>
          <option value={"Français"}>Français</option>
          <option value={"Deutsch"}>Deutsch</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M14.707 7.293a1 1 0 0 0-1.414 1.414L16.586 12l-3.293 3.293a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414l-4-4zM5.293 7.293a1 1 0 0 0-1.414 0L.586 11.293a1 1 0 0 0 0 1.414L3.293 15.707a1 1 0 1 0 1.414-1.414L2.414 12l3.293-3.293a1 1 0 0 0 0-1.414z" />
          </svg>
        </div>
      </div>
      <div className="relative inline-flex mx-1">
        <select
          defaultValue={"RS"}
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value={"AUD"}>AUD</option>
          <option value={"USD"}>USD</option>
          <option value={"RS"}>Rs</option>
          <option value={"AED"}>AED</option>
          <option value={"AZN"}>AZN</option>
          <option value={"BOB"}>BOB</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M14.707 7.293a1 1 0 0 0-1.414 1.414L16.586 12l-3.293 3.293a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414l-4-4zM5.293 7.293a1 1 0 0 0-1.414 0L.586 11.293a1 1 0 0 0 0 1.414L3.293 15.707a1 1 0 1 0 1.414-1.414L2.414 12l3.293-3.293a1 1 0 0 0 0-1.414z" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default CountryComponent;
