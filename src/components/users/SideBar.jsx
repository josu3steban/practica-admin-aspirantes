import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

export const SideBar = () => {

  const location = useLocation();
  const urlActual = location.pathname;
  
  return (
    <div
      className="bg-my-bg-third w-1/4 text-my-font-one"
    >

      <h2 className=" animate-bounce mt-10 mb-10 font-black text-3xl text-center text-my-font-one" >
        Administración
      </h2>

      <Link
        to="/users"
        className={`${urlActual === '/users' && ' text-2xl font-semibold tracking-widest' } ' block text-center mb-4 text-xl font-medium transition-all w-auto '`}
      >
        Clientes
      </Link>

      <Link
        to="/users/new"
        className={` ${urlActual === '/users/new' && ' text-2xl font-semibold tracking-widest'}  block text-center mb-4 text-xl font-medium transition-all '`}
      >
        Nuevo Cliente
      </Link>

      <Link
        to="/users/update"
        className={` ${urlActual === '/users/update' && ' text-2xl font-semibold tracking-widest'}  block text-center text-xl font-medium transition-all '`}
      >
        Editar Cliente
      </Link>

    </div>
  )
}
