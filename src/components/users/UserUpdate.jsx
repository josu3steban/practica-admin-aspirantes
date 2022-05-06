import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { userCleanActive, userSetActive } from '../../actions/user';
import { UserForm } from './UserForm'

export const UserUpdate = () => {

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {

    dispatch( userSetActive( id ) );
    
    return () => {

      dispatch( userCleanActive() );
      
    }
  }, [] )
  
  
  return (
    <div className='flex flex-col items-center '>
      
      <h2 className='text-4xl text-center text-my-font-one font-black'>
        Editar <span className='text-my-font-two'>Aspirante</span>
      </h2>
      
      <UserForm />
      
    </div>
  )
}
