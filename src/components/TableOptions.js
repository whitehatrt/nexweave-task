import React from "react";

const TableOptions = () => {
  return (
    <>
      <div className="flex flex-row justify-arround mb-4">
        <a href="/" className="ml-5 border-b-4 border-yellow-300">
          All Campaigns
        </a>
        <a href="/" className="ml-5 text-gray-400">
          Quick Campaigns
        </a>
        <a href="/" className="ml-5 text-gray-400">
          CSV Campaigns
        </a>
        <a href="/" className="ml-5 text-gray-400">
          URL Override Campaigns
        </a>
        <div className="flex items-center right-0 absolute mr-4 ">
          <input type="checkbox" name="check" id="check" />
          <a className="ml-2" href="/">
            Show Archieved
          </a>
        </div>
      </div>
    </>
  );
};

export default TableOptions;
