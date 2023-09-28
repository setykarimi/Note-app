import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";
import { Link } from "react-router-dom";

export default function OtherLinks({ expanded }) {
  return (
    <div className="mt-auto">
      <Link
        to="/setting"
        className={`px-2 py-1 rounded-md text-gray-600 flex items-center ${
          !expanded ? "justify-center" : ""
        } gap-2 mt-4`}
      >
        <span className={`block rotate-90 ${expanded ? "w-5" : ""}`}>
          <VscSettings size={15} />
        </span>
        {expanded && "Settings"}
      </Link>
      <Link
        to=""
        className={`px-2 py-1 rounded-md text-gray-600 flex items-center ${
          !expanded ? "justify-center" : ""
        } gap-2`}
      >
        <span className={`block ${expanded ? "w-5" : ""}`}>
          <FaSignOutAlt size={15} />
        </span>
        {expanded && "Sign out"}
      </Link>
    </div>
  );
}
