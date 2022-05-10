import Icono from "../../assets/img/menu.png";
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useState } from "react";

export const SideBar = () => {

  const location = useLocation();
  const urlActual = location.pathname;
  
  const [ menu, setMenu ] = useState( true );
  const [ animar, setAnimar ] = useState( true );

  const handleMenu = () => {

    if( menu ){

      setMenu( !menu );

      setTimeout(() => {
        setAnimar( !animar );
      }, 200);

    } else {

      setTimeout(() => {
        setMenu( !menu );
      }, 200);

      setAnimar( !animar );
      
    }

  }
  
  return (
    <div
      className="
      bg-my-bg-third 
      text-my-font-one

        sm:flex
        sm:flex-col
        sm:flex-wrap
      
        md:w-1/5 
    ">

      <div className="sm:flex sm:justify-between sm:items-center  md:block">

        <h2 className=" 
          font-black 
          text-2xl 
          text-center 
        text-my-font-one

          sm:mt-2
          sm:mb-4
          sm:ml-5

          md:ml-0
          md:w-full
          md:animate-bounce 
          md:mt-10 
          md:mb-10 
        ">
          ADMINISTRACIÓN
        </h2>

        <div className="mr-5 md:hidden">
          <button
            id='icon-menu'
            onClick={ handleMenu }
            className="
              border
              bg-my-bg-second
              fill-current
              w-6
              p-1
              rounded
              flex
          ">
            <img className="w-full" src={Icono} alt="icono de boton" />
          </button>
        </div>

      </div>

      <div id="menu" className={ `${menu ? 'sm:hidden' : ''} ${animar ? 'sm:opacity-0' : 'sm:opacity-100'} md:block md:opacity-100 transition-opacity duration-200` }>
        <Link
          to="/"
          className={`${urlActual === '/' && ' text-xl font-semibold tracking-widest' } ' block text-center mb-4 text-xl font-medium transition-all w-auto '`}
        >
          Aspirantes
        </Link>

        <Link
          to="/new"
          className={` ${urlActual === '/new' && ' text-xl font-semibold tracking-widest'}  block text-center mb-4 text-xl font-medium transition-all '`}
        >
          Agregar Aspirante
        </Link>
      </div>

      {/* <Link
        to="/update/:id"
        className={` ${urlActual === '/update' && ' text-xl font-semibold tracking-widest'}  block text-center text-xl font-medium transition-all '`}
      >
        Editar Aspirante
      </Link> */}

    </div>
  )
}
