import React from "react";
import { BiMenu } from "react-icons/bi";
import SearchBar from "./components/searchBar";
import Tasks from "./components/tasks";
import Lists from "./components/lists";
import Tags from "./components/tags";

export default function Sidebar() {
  return (
    <div className="bg-gray-100 p-6 rounded-xl">
      <div className="title flex justify-between items-center">
        <span className="font-bold text-2xl text-gray-600">Menu</span>
        <button>
          <BiMenu size={25} className="text-gray-600" />
        </button>
      </div>
      <SearchBar />
      <Tasks />
      <Lists />
      <Tags />
    </div>
  );
}
