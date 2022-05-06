import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';
import { types } from "../types/types";


const url = 'http://localhost:4000/users';

const swalError = ( type, error ) => {

    Swal.fire({
        icon: 'error',
        title: `Uups!`,
        text: `Ha ocurrido un error al ${ type }: ${ error }`,
    });

};


export const userSetActive = ( id ) => {
    return {
        type: types.userSetActive,
        payload: id
    }
}

export const userStartLoad = () => {

    return async ( dispatch ) => {

        try {

            const response = await fetch( url );
            const result   = await response.json();

            dispatch( userLoad( result ) );

        } catch( error ) {

            swalError( 'cargar los datos', error );
            
        }
        
    }
};

const userLoad = ( users ) => {

    return {

        type: types.userLoad,
        payload: users
    }
};

export const userStartAdd = ( user ) => {
    return async ( dispatch ) => {

        try {

            const response = await fetch( url, {
                method: 'POST',
                headers: { 'Content-Type' : 'application/json' },
                body: JSON.stringify( user )
            })

            const result = await response.json();

            dispatch( userAdd( result ) );

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Guardado Exitoso!',
                timer: 1500
            });

        } catch( error ) {
                
            swalError( 'registrar', error );
        }
        
    }
};

const userAdd = ( user ) => {

    console.log(user);

    return {
        type: types.userAdd,
        payload: user
    }
};

export const userStartDelete = ( id ) => {
    return async( dispatch ) => {

        try {

            const response = await fetch(`${url}/${id}`, {
                method: 'DELETE',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({  })
            });

            const result = await response.json();

            dispatch( userDelete() );

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Estudiante Eliminado!',
                timer: 1500
            });

        } catch( error ) {

            swalError( 'eliminar', error );

        }
        
    }
}

const userDelete = () => {
    return {
        type: types.userDelete
    }
}