import React, { useState } from 'react'
import Sidebar from './sidebar/sidebar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  const [expanded, setExpanded] = useState(true);
  return (
    <div className={`lg:container mx-auto  ${expanded ? 'grid grid-cols-4' : "flex" } gap-8 p-4 transition-all`}>
        <Sidebar expanded={expanded} setExpanded={setExpanded}/>
     <div className='col-span-3'>
     <Outlet />
     </div>
    </div>
  )
}
