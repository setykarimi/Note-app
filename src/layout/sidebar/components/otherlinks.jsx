import React from "react";
import { Link, useLocation } from "react-router-dom";
import { VscSettings } from "react-icons/vsc";
import { FaSignOutAlt } from "react-icons/fa";

export default function OtherLinks() {
  return (
    <div className="mt-auto">
      <Link
        to="/setting"
        className={`px-2 py-1 rounded-md text-gray-600 flex items-center gap-2 mt-4`}
      >
        <span className="block w-5 rotate-90">
          <VscSettings size={15} />
        </span>
        Settings
      </Link>
      <Link
        to=""
        className={`px-2 py-1 rounded-md text-gray-600 flex items-center gap-2`}
      >
        <span className="block w-5 ">
          <FaSignOutAlt size={15} />
        </span>
        Sign out
      </Link>
    </div>
  );
}
