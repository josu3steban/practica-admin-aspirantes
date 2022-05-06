import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

export const SideBar = () => {

  const location = useLocation();
  const urlActual = location.pathname;
  
  return (
    <div
      className="bg-my-bg-third w-1/5 text-my-font-one"
    >

      <h2 className=" animate-bounce mt-10 mb-10 font-black text-2xl text-center text-my-font-one" >
        ADMINISTRACIÓN
      </h2>

      <Link
        to="/users"
        className={`${urlActual === '/users' && ' text-xl font-semibold tracking-widest' } ' block text-center mb-4 text-xl font-medium transition-all w-auto '`}
      >
        Aspirantes
      </Link>

      <Link
        to="/users/new"
        className={` ${urlActual === '/users/new' && ' text-xl font-semibold tracking-widest'}  block text-center mb-4 text-xl font-medium transition-all '`}
      >
        Agregar Aspirante
      </Link>

      <Link
        to="/users/update"
        className={` ${urlActual === '/users/update' && ' text-xl font-semibold tracking-widest'}  block text-center text-xl font-medium transition-all '`}
      >
        Editar Aspirante
      </Link>

    </div>
  )
}
