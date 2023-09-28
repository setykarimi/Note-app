import React, { useState } from "react";
import Sidebar from "./sidebar/sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const mobileView =  window.innerWidth < 1025
  const [expanded, setExpanded] = useState(!mobileView);
  console.log(window.innerWidth);
  console.log(mobileView);
  return (
    <div
      className={`xl:container mx-auto  ${
        expanded ? "md:grid md:grid-cols-4" : "flex"
      } gap-8 p-4 transition-all`}
    >
      <Sidebar expanded={expanded} setExpanded={setExpanded} />
      <div className="col-span-3">
        <Outlet />
      </div>
    </div>
  );
}
