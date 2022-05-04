import React from 'react'

export const UserForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    
  return (

    <form
        className='mt-10 border bg-[#e0e0e0] rounded-lg shadow-lg p-5 flex flex-wrap box-border'
        onSubmit={handleSubmit}
      >

        <div className="mb-4 w-1/2 pr-3">
          <label className='block text-my-font-one text-xl font-medium mb-3'>Nombre</label>
          <input
            className='text-base font-normal text-gray-700 rounded-xl border focus:outline-none focus:ring-2 focus:ring-my-button-hover-border p-3 w-full'
            type="text"
            placeholder="Nombre"
          />
        </div>

        <div className="mb-4 w-1/2">
          <label className='block text-my-font-one text-xl font-medium mb-3'>Universidad</label>
          <input
            className='text-base font-normal text-gray-700 rounded-xl border focus:outline-none focus:ring-2 focus:ring-my-button-hover-border p-3 w-full'
            type="text"
            placeholder="Universidad"
          />
        </div>

        <div className="mb-4 w-1/2 pr-3">
          <label className='block text-my-font-one text-xl font-medium mb-3'>Correo</label>
          <input
            className='text-base font-normal text-gray-700 rounded-xl border focus:outline-none focus:ring-2 focus:ring-my-button-hover-border p-3 w-full'
            type="email"
            placeholder="Correo"
          />
        </div>

        <div className="mb-4 w-1/2">
          <label className='block text-my-font-one text-xl font-medium mb-3'>Número</label>
          <input
            className='text-base font-normal text-gray-700 rounded-xl border focus:outline-none focus:ring-2 focus:ring-my-button-hover-border p-3 w-full'
            type="number"
            placeholder="Número de celular"
          />
        </div>

        <div className="mb-8 w-full ">
            <label className='block text-my-font-one text-xl font-medium mb-3'>Acerca de</label>

            <textarea
                className='text-base font-normal text-gray-700 rounded-xl border focus:outline-none focus:ring-2 focus:ring-my-button-hover-border p-3 w-full'
                name=""
                id=""
                cols="30"
                rows="5"
                placeholder="Breve descripción"
            >

            </textarea>
        </div>

        <button
          className='w-full border-none cursor-pointer shadow-md shadow-gray-200 hover:shadow-xl hover:shadow-gray-200 rounded-xl text-xl font-black bg-my-bg-third text-my-button-font active:shadow-none transition-all'
          type="submit"
        >
          <span className='block py-2 px-4 box-border bg-my-bg-white border-2 border-my-button-border rounded-xl -translate-y-0.5 hover:-translate-y-1.5 active:translate-y-0 transition-all duration-100 ease-linear'>REGISTRAR</span>
        </button>
        
      </form>
    
  )
}
