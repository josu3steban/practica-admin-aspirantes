import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const HeaderLogged = () => {
  return (
    <div>
      
      <h2
        className='text-center text-4xl font-black'
      >
        PRÁCTICA DE ADMINISTRACIÓN DE PERSONAS
      </h2>

      <Outlet />
    </div>
  )
}
