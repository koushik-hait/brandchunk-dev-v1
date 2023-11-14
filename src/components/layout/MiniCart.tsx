import Link from "next/link";
import React from "react";

const MiniCart = () => {
  return (
    <>
      <div className="end-0 z-10 w-80 p-6 cart-menu mb-16 sm:mb-0 shadow-xl bg-gray-800">
        <button className="absolute end-4 top-4 text-white transition hover:scale-110">
          <span className="sr-only">Close cart</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="mt-4 space-y-6">
          <ul className="space-y-4">
            <li className="flex items-center gap-4 text-white">
              <img
                src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                alt=""
                className="h-16 w-16 rounded object-cover"
              />

              <div>
                <h3 className="text-sm text-white">Basic Tee 6-Pack</h3>

                <dl className="mt-0.5 space-y-px text-[10px] text-white">
                  <div>
                    <dt className="inline">Size:</dt>
                    <dd className="inline">XXS</dd>
                  </div>

                  <div>
                    <dt className="inline">Color:</dt>
                    <dd className="inline">White</dd>
                  </div>
                </dl>
              </div>

              <div className="flex flex-1 items-center justify-end gap-2 text-white">
                <form>
                  <label htmlFor="Line1Qty" className="sr-only">
                    Quantity
                  </label>
                  <input
                    type="number"
                    id="Line1Qty"
                    className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                  />
                </form>

                <button className="text-white transition hover:text-red-600">
                  <span className="sr-only">Remove item</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </li>
          </ul>

          <div className="space-y-4 text-center text-white">
            <Link
              href="/cart"
              className="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-100 transition hover:ring-1 hover:ring-gray-400"
            >
              View cart (2)
            </Link>

            <Link
              href="/checkout"
              className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
            >
              Checkout
            </Link>

            <Link
              href="/"
              className="inline-block text-sm text-gray-100 underline underline-offset-4 transition hover:text-gray-600"
            >
              Continue shopping
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiniCart;
