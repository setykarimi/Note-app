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
        expanded ? "w-auto p-6" : "md:w-20 w-16 p-2"
      } bg-gray-100 rounded-xl sidebar h-full flex flex-col relative transition-all	`}
    >
      <div
        className={`title flex ${
          expanded ? "justify-between" : "justify-center"
        } items-center`}
      >
        <span
          className={`font-bold block ${
            expanded ? "text-2xl" : "text-sm mt-2 "
          } text-gray-600 `}
        >
          Menu
        </span>

        <button
          onClick={() => setExpanded(!expanded)}
          className={`transition-all ${
            !expanded ? "absolute -right-2 top-8" : ""
          }`}
        >
          {expanded ? (
            <BiMenu size={25} className="text-gray-600" />
          ) : (
            <span className="bg-cyan-500 rounded-full w-5 h-5 flex items-center justify-center ">
              {" "}
              <FaChevronRight size={11} className="text-white" />
            </span>
          )}
        </button>
      </div>
      {expanded && <SearchBar />}
      <Tasks expanded={expanded} />
      <Lists expanded={expanded} />
      <Tags expanded={expanded} />
      <OtherLinks expanded={expanded} />
    </div>
  );
}
