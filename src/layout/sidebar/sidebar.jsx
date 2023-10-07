import React from "react";
import { BiMenu } from "react-icons/bi";
import { FaChevronRight } from "react-icons/fa";
import Lists from "./components/lists";
import OtherLinks from "./components/otherlinks";
import SearchBar from "./components/searchBar";
import Tags from "./components/tags";
import Tasks from "./components/tasks";

export default function Sidebar({ expanded, setExpanded }) {
  return (
    <div
      className={`${
        expanded ? "w-auto p-6 bg-gray-100 " : "md:w-20 w-8 p-2"
      } rounded-xl sidebar h-full flex flex-col relative transition-all	`}
    >
      <div
        className={`title flex ${
          expanded ? "justify-between" : "justify-center"
        } items-center`}
      >
        {expanded && (
          <span
            className={`font-bold block text-2xl "
          } text-gray-600 `}
          >
            Menu
          </span>
        )}

        <button
          onClick={() => setExpanded(!expanded)}
          className={`transition-all`}
        >
          <BiMenu size={25} className="text-gray-600" />
        </button>
      </div>
      {expanded && (
        <>
          <SearchBar />
          <Tasks />
          <Lists />
          <Tags />
          <OtherLinks />
        </>
      )}
    </div>
  );
}
