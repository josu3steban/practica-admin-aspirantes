import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { userStartLoad } from '../../actions/user'
import { SideBar } from './SideBar'
import { UserListContainer } from './UserListContainer'

export const UserScreen = () => {

  const dispatch = useDispatch();

  useEffect( () => {

    dispatch( userStartLoad() );
    
  }, [dispatch]);
  
  return (
    <div
      className='flex h-screen'
    >
      
      <SideBar />

      <div className="w-4/5 py-5 px-10 max-h-screen overflow-scroll">
        <Outlet />
      </div>
      
    </div>
  )
}
