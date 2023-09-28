import React from "react";
import { BiMenu } from "react-icons/bi";
import SearchBar from "./components/searchBar";
import Tasks from "./components/tasks";

export default function Sidebar() {
  return (
    <div className="bg-gray-100 p-4 rounded-xl">
      <div className="title flex justify-between items-center">
        <span className="font-bold text-2xl text-gray-600">Menu</span>
        <button>
          <BiMenu size={25} className="text-gray-600" />
        </button>
      </div>
      <SearchBar />
      <Tasks />
    </div>
  );
}
