import React from "react";

const TableHeader = () => {
  return (
    <>
      <div className="container px-5  pt-4 mx-auto flex items-center sm:flex-row flex-col">
        <a href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <span className="ml-3 text-xl">Campaigns</span>
        </a>

        <span className="inline-flex items-center  sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <button className="ml-3 mr-3 text-gray-500">
            <svg
              className="h-6 w-6 text-purple-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <polyline points="23 4 23 10 17 10" />{" "}
              <polyline points="1 20 1 14 7 14" />{" "}
              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
            </svg>
          </button>

          <button
            type="button"
            className="py-4 px-6 flex mr-3 border border-indigo-600  text-indigo-600 hover:bg-indigo-600 hover:text-white focus:ring-indigo-500 focus:ring-offset-indigo-200  w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            <svg
              className="h-6 w-6   "
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <line x1={12} y1={5} x2={12} y2={19} />{" "}
              <line x1={5} y1={12} x2={19} y2={12} />
            </svg>
            Create a new campaign
          </button>
        </span>
      </div>
    </>
  );
};

export default TableHeader;
