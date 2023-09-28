import React from "react";
import { BiChevronsRight, BiListCheck, BiSolidNote } from "react-icons/bi";
import { FaCalendarAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function Tasks({ expanded }) {
  const { pathname } = useLocation();
  const links = [
    {
      title: "Upcoming",
      icon: <BiChevronsRight size={22} className="text-gray-500" />,
      to: "/upcoming",
      badge: 12,
    },
    {
      title: "Today",
      icon: <BiListCheck size={22} className="text-gray-500" />,
      to: "/",
      badge: 5,
    },
    {
      title: "Calender",
      icon: <FaCalendarAlt size={16} className="text-gray-500" />,
      to: "/calender",
    },
    {
      title: "Sticky Wall",
      icon: <BiSolidNote size={18} className="text-gray-500" />,
      to: "/sticky-wall",
    },
  ];

  return (
    <div
      className={`${
        expanded ? "mt-8" : "mt-4"
      }  border-b border-b-gray-200 pb-4`}
    >
      <span
        className={`text-xs text-gray-600 font-bold block ${
          expanded ? "text-left" : "text-center"
        }`}
      >
        TASKS
      </span>
      <div className="flex flex-col  mt-2">
        {links.map((link) => (
          <CustomLink link={link} currentPath={pathname} expanded={expanded} />
        ))}
      </div>
    </div>
  );
}

const CustomLink = ({ link, currentPath, expanded }) => {
  const path = link.to == currentPath;
  return (
    <Link
      to={link.to}
      className={`${
        path && "bg-gray-200 font-bold"
      } p-2 rounded-md text-gray-600 flex items-center ${
        !expanded && "justify-center"
      }`}
    >
      <span className="flex items-center gap-2">
        <span className="block w-5">{link.icon}</span>
        {expanded && link.title}
      </span>

      {link.badge && expanded && (
        <span
          className={`block ml-auto ${
            path ? "bg-white" : "bg-gray-200"
          } font-bold w-8 text-center py-[2px] rounded text-xs`}
        >
          {link.badge}
        </span>
      )}
    </Link>
  );
};
