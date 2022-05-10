import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { userSetActive, userStartDelete } from '../../actions/user';

export const UserListContainer = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector( state => state.user);

  const handleEdit = ( id ) => {

    dispatch( userSetActive( id ) );
    navigate( `/update/${ id }` );
    
  }

  const handleDelete = ( id ) => {
    
    dispatch( userSetActive( id ) );
    dispatch( userStartDelete( id ) );
    
  }

  return (
    <div className=''>

      <h2 className='font-black text-center text-4xl text-my-font-one'>
        Listado de <span className='text-my-font-two'>Aspirantes</span>
      </h2>

      <div className="
      
        sm:overflow-x-scroll

        md:overflow-x-visible
      ">
        <table className='
          mt-10 
          bg-my-bg-second 
          table-auto 
          shadow-md 

          sm:w-max
          sm:mx-2

          md:w-full
          md:mx-0
        '>
          <thead className='bg-my-bg-third text-my-font-three'>
            <tr>
              <th className='p-2'>Nombre</th>
              <th className='p-2'>Universidad</th>
              <th className='p-2'>E-mail</th>
              <th className='p-2'>Celular</th>
              <th className='p-2'>Descripción</th>
              <th className='p-2'>Acciones</th>
            </tr>
          </thead>

          <tbody>

            {
              user.map( users => (

                <tr key={users.id} className='border-b rounded-md border-gray-300 hover:bg-gray-200'>

                  <td className='p-2'>{ users.name }</td>
                  <td className='p-2'>{ users.university }</td>
                  <td className='p-2'>{ users.email }</td>
                  <td className='p-2'>{ users.cellphone }</td>
                  <td className='p-2'>{ users.description }</td>
                  <td className='p-2'>
                    <button
                      className='
                        block
                        border-2
                        rounded-md
                        w-full
                        uppercase
                        bg-my-button 
                        text-my-font-one 
                        border-my-font-one 
                        hover:bg-my-font-one
                        hover:text-my-button-hover-font
                        hover:border-my-font-one
                        '
                        onClick = { () => handleEdit( users.id ) }
                        
                    >Editar</button>

                    <button
                      className='
                        block
                        mt-2
                        border-2
                        rounded-md
                        w-full
                        uppercase
                        text-base
                        bg-my-button 
                        text-red-500 
                        border-red-500 
                        hover:bg-red-500
                        hover:text-my-button-hover-font
                        hover:border-red-500
                        '
                        onClick = { () => handleDelete( users.id ) }

                    >Eliminar</button>
                  </td>

                </tr>
                
              ))
            }

          </tbody>
        </table>
      </div>
      
    </div>
  )
}
