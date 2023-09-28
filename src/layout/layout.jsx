import React from 'react'
import Sidebar from './sidebar'

export default function Layout() {
  return (
    <div className='container mx-auto grid grid-cols-4'>
        <Sidebar />
    </div>
  )
}
