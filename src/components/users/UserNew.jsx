import React from 'react'
import { UserForm } from './UserForm'

export const UserNew = () => {

  return (
    <div className='flex flex-col items-center '>
      
      <h2 className='text-4xl text-center text-my-font-one font-black'>
        Registrar <span className='text-my-font-two'>Aspirante</span>
      </h2>
      
      <UserForm />
      
    </div>
  )
}
