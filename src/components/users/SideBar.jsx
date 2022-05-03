import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

export const SideBar = () => {

  const location = useLocation();
  const urlActual = location.pathname;
  
  return (
    <div
      className="bg-my-bg-third w-1/4"
    >

      <h2 className=" animate-bounce mt-10 mb-10 font-black text-3xl text-center text-my-font-one" >
        Administración
      </h2>

      <Link
        to="/users"
        className={`${urlActual === '/users' ? 'border-b-my-font-one animate-pulse' : ' border-transparent '} ' block text-center mb-4 text-xl font-medium border-b-2 hover:border-b-my-font-one transition-all w-auto '`}
      >
        Clientes
      </Link>

      <Link
        to="/users/new"
        className={` ${urlActual === '/users/new' ? 'border-b-my-font-one animate-pulse' : ' border-transparent '}  block text-center mb-4 text-xl font-medium border-b-2 border-transparent hover:border-b-my-font-one transition-all '`}
      >
        Nuevo Cliente
      </Link>

      <Link
        to="/users/update"
        className={` ${urlActual === '/users/update' ? 'border-b-my-font-one animate-pulse' : ' border-transparent '}  block text-center text-xl font-medium border-b-2 border-transparent hover:border-b-my-font-one transition-all '`}
      >
        Editar Cliente
      </Link>

    </div>
  )
}
