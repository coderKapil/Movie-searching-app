import React from "react";

const SearchBar = () => {
  return (
    <div>
      <div className="input flex justify-center px-5 lg:px-0 py-5">
        <input
          type="text"
          placeholder="Search here"
          className="px-2 py-2 shadow-md bg-gray-200 placeholder-gray-400 rounded-l-lg w-80 outline-none border-2 border-gray-500 text-black"
        />

        <button className="btn bg-[#40407a] px-4 text-white rounded-r-lg border-b-2 border-r-2 border-t-2 border-gray-500  shadow-md">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
