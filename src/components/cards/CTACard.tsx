import React from "react";

const CTACard = () => {
  return (
    <>
      <div className="m-10 mx-4 w-screen overflow-hidden rounded-xl border shadow-lg md:pl-8">
        <div className="flex flex-col overflow-hidden bg-white sm:flex-row md:h-80">
          <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
            <h2 className="text-xl font-bold text-gray-900 md:text-2xl lg:text-4xl">
              Winter Collection
            </h2>
            <p className="mt-2 text-lg">By Luis Vuitton</p>
            <p className="mt-4 mb-8 max-w-md text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
              iusto, cumque dolores sit odio ex.
            </p>
            <a
              href="#"
              className="group mt-auto flex w-44 cursor-pointer select-none items-center justify-center rounded-md bg-black px-6 py-2 text-white transition"
            >
              <span className="group flex w-full items-center justify-center rounded py-1 text-center font-bold">
                {" "}
                Shop now{" "}
              </span>
            </a>
          </div>

          <div className="order-first ml-auto h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
            <img
              className="h-full w-full object-cover"
              src="https://dummyimage.com/600x400/000/fff.jpg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CTACard;
