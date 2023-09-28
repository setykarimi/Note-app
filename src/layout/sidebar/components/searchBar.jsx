import React from "react";
import { BiSearch } from "react-icons/bi";

export default function SearchBar() {
  return (
    <div className="mt-4 border border-gray-200 rounded-lg transition-colors flex items-center">
      <BiSearch className="text-gray-500 mx-2" size={20} />
      <input
        className="text-sm outline-none bg-transparent py-2 pr-4 w-full text-gray-600 placeholder:text-gray-500"
        placeholder="Search"
      />
    </div>
  );
}
