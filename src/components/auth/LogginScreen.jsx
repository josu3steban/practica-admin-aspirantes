import React from 'react'

export const LogginScreen = () => {
  return (
    <div className='h-screen flex justify-center items-center m-0'>

    <div className="bg-my-bg-second rounded-lg p-5 w-2/5">

      <h2 className='text-5xl text-center text-my-font-two font-bold mb-10'>
        Iniciar Sesión
      </h2>

      <form>
        <div className="mb-8">
          <label className='block text-3xl text-my-font-one font-bold' htmlFor="email">Email</label>
          <input
            className='text-xl font-medium focus:outline-none focus:ring-2 focus:ring-my-button-hover-border rounded-md transition-all duration-30000 mt-3 p-3 w-full'
            type="email"
            name="email"
            id="email"
          />
        </div>

        <div className="mb-5">
          <label className='block text-3xl text-my-font-one font-bold' htmlFor="pass">Contraseña</label>
          <input
            className='text-xl font-medium focus:outline-none focus:ring-2 focus:ring-my-button-hover-border rounded-md transition-all duration-30000 mt-3 p-3 w-full'
            type="TEXT"
            name="password"
            id="pass"
          />
        </div>

        <div className="text-center">
          <input
            className='p-3 mt-8 text-3xl font-bold bg-my-button hover:bg-my-button-hover border-2 border-my-button-border hover:border-my-button-hover-border text-my-button-font hover:text-my-button-hover-font w-full active:w-11/12 rounded-xl cursor-pointer transition-all'
            type="submit"
            value="INGRESAR"
          />
        </div>
        
      </form>

    </div>
      
    </div>
  )
}
