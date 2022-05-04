import React from 'react'
import { Outlet } from 'react-router-dom'
import { SideBar } from './SideBar'
import { UserListContainer } from './UserListContainer'

export const UserScreen = () => {
  return (
    <div
      className='flex h-screen'
    >
      
      <SideBar />

      <div className="w-3/4 py-5 px-10 max-h-screen overflow-scroll">
        <Outlet />
      </div>
      
    </div>
  )
}
