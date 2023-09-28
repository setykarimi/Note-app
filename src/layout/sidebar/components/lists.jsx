import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";

export default function Lists() {
  const { pathname } = useLocation();

  const lists = [
    {
      name: "Personal",
      color: "bg-red-400",
      badge: 3,
      to: "",
    },
    {
      name: "Word",
      color: "bg-cyan-400",
      badge: 6,
      to: "/",
    },
    {
      name: "List 1",
      color: "bg-yellow-400",
      badge: 3,
      to: "",
    },
  ];
  return (
    <div className="mt-8 border-b border-b-gray-200 pb-4">
      <span className="text-xs text-gray-600 font-bold">LISTS</span>
      <div className="flex flex-col  mt-2">
        {lists.map((list) => (
          <CustomLink list={list} currentPath={pathname} />
        ))}
        <button className="flex items-center gap-2 text-gray-600 font-medium px-1 py-2">
          <IoMdAdd className="text-gray-500" size={20} />
          Add New List
        </button>
      </div>
    </div>
  );
}

const CustomLink = ({ list, currentPath }) => {
  const path = list.to == currentPath;

  return (
    <Link
      to={list.to}
      className={`${
        path && "bg-gray-200 font-bold"
      } p-2 rounded-md text-gray-600 flex items-center`}
    >
      <span className="flex items-center gap-4">
        <span
          className={`block ${list.color} w-3 h-3`}
          style={{ borderRadius: "2px" }}
        ></span>
        {list.name}
      </span>

      <span
        className={`block ml-auto ${
          path ? "bg-white" : "bg-gray-200"
        } font-bold w-8 text-center py-[2px] rounded text-xs`}
      >
        {list.badge}
      </span>
    </Link>
  );
};
