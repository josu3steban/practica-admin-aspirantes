import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

export const HeaderPublic = () => {
  return (
    <>
      <nav className=' bg-my-bg-white flex justify-between px-4 py-5'>
        
        <h2 className='hover:text-my-font-two font-black text-my-font-one text-xl transition-all duration-300'>
          ADMINISTRADOR DE PERSONAS
        </h2>
        
        <Link
          to='/'
          className=' hover:text-my-font-two font-bold text-right text-my-font-one text-xl transition-all duration-300'
        >
          INGRESAR
        </Link>

      </nav>

      <Outlet />
    </>
  )
}
