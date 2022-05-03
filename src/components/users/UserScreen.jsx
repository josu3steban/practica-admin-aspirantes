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

      <div className="w-3/4 mt-10">
        <Outlet />
      </div>
      
    </div>
  )
}
