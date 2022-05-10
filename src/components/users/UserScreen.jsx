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
      className='
        md:flex
    '>
      
      <SideBar />

      <div className="
        py-5 
        md:max-h-screen 
        md:overflow-scroll

        md:w-4/5
        md:px-10 
      ">
        <Outlet />
      </div>
      
    </div>
  )
}
