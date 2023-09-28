import React, { useState } from "react";
import Sidebar from "./sidebar/sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const mobileView = window.innerWidth < 1025;
  const [expanded, setExpanded] = useState(!mobileView);
  return (
    <div
      className={`xl:container mx-auto  ${
        expanded ? "md:grid md:grid-cols-4" : "flex"
      } md:gap-8 gap-4 p-4 transition-all`}
    >
      <Sidebar expanded={expanded} setExpanded={setExpanded} />
      <div className={`${expanded ? 'col-span-3' : "w-full"}`}>
        <Outlet />
      </div>
    </div>
  );
}
