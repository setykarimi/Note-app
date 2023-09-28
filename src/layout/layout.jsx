import React from 'react'
import Sidebar from './sidebar/sidebar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className='container mx-auto grid grid-cols-4 gap-8 p-4'>
        <Sidebar />
        <Outlet />
    </div>
  )
}
