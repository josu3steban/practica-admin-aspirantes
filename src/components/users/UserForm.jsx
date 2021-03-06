import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { userStartAdd, userStartUpdate } from "../../actions/user";


export const UserForm = () => {

    const dispatch = useDispatch();
    const { user, active } = useSelector( state => state.user );
    const { id } = useParams();
    const navigate = useNavigate();
    // const { user } = useSelector( state => state.user );

    const [ userEdit, setUserEdit ] = useState({});

    const newUserSchema = Yup.object().shape({
        name: Yup.string().required("El nombre es obligatorio"),
        email: Yup.string().email('Email invalido').required("El email es obligatorio"),
        university: Yup.string().required("La universidad es obligatorio"),
        cellphone: Yup.number().positive('El número debe ser postivo').integer('Formato de número incorrecto').typeError("Número no valido"),
    });

    const handleSubmit = ( values, reset ) => {

        if( !!active ) {

            // values.id = Number(id);
            dispatch( userStartUpdate( id, values ) );
            reset();
            navigate( '/' );

        } else {

            dispatch( userStartAdd( values ) );

            reset();

        }

    }

    console.log('DATOS', id);

    useEffect( () => {

        if( !!active ) {

            setUserEdit( user.find( users => users.id === Number( id ) ) );

        }
            

    }, [user] );


  return (

    <div className="
        mt-10
        
        sm:w-11/12

        md:w-3/4 
        p-10 
        border 
        rounded-md 
        shadow-md
    ">
        <Formik

            initialValues={
                {
                    name        : userEdit?.name        ?? '',
                    email       : userEdit?.email       ?? '',
                    university  : userEdit?.university  ?? '',
                    cellphone   : userEdit?.cellphone   ?? '',
                    description : userEdit?.description ?? ''
                }
            }

            enableReinitialize ={  true }

            validationSchema={ newUserSchema }

            onSubmit={  (values, {resetForm}) => {
                 handleSubmit(values, resetForm);

                // resetForm();
            }}
        
        >
            {
                ( { errors, touched} ) => {

                    return(

                        <Form className="">
                            <div className="mb-4">
                                <label className='block text-my-font-one text-xl font-medium mb-3'>Nombre</label>
                                { (errors.name || touched.name ) &&
                                    <p className="text-rose-700">{errors.name}</p>
                                }
                                <Field
                                    className='text-base font-normal text-gray-700 rounded-xl border focus:outline-none focus:ring-2 focus:ring-my-button-hover-border p-3 w-full'
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Nombre"
                                />
                            </div>

                            <div className="mb-4">
                                <label className='block text-my-font-one text-xl font-medium mb-3'>Universidad</label>
                                { (errors.university || touched.university ) &&
                                    <p className="text-rose-700">{errors.university}</p>
                                }
                                <Field
                                    className='text-base font-normal text-gray-700 rounded-xl border focus:outline-none focus:ring-2 focus:ring-my-button-hover-border p-3 w-full'
                                    type="text"
                                    name="university"
                                    id="university"
                                    placeholder="Universidad de estudiante"
                                />
                            </div>

                            <div className="mb-4">
                                <label className='block text-my-font-one text-xl font-medium mb-3'>E-mail</label>
                                { (errors.email || touched.email ) &&
                                    <p className="text-rose-700">{errors.email}</p>
                                }
                                <Field
                                    className='text-base font-normal text-gray-700 rounded-xl border focus:outline-none focus:ring-2 focus:ring-my-button-hover-border p-3 w-full'
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="E-mail del estudiante"
                                />
                            </div>

                            <div className="mb-4">
                                <label className='block text-my-font-one text-xl font-medium mb-3'>Celular</label>
                                { (errors.cellphone || touched.cellphone ) &&
                                    <p className="text-rose-700">{errors.cellphone}</p>
                                }
                                <Field
                                    className='text-base font-normal text-gray-700 rounded-xl border focus:outline-none focus:ring-2 focus:ring-my-button-hover-border p-3 w-full'
                                    type="tel"
                                    name="cellphone"
                                    id="cellphone"
                                    placeholder="Edad del estudiante"
                                />
                            </div>

                            <div className="mb-4">
                                <label className='block text-my-font-one text-xl font-medium mb-3'>Descripción</label>
                                <Field
                                    as="textarea"
                                    className='text-base font-normal text-gray-700 rounded-xl border focus:outline-none focus:ring-2 focus:ring-my-button-hover-border p-3 w-full'
                                    type="text"
                                    name="description"
                                    id="description"
                                    placeholder="Descripción del estudiante"
                                />
                            </div>

                            <div className="w-full text-right">
                                <button
                                    className='sm:w-full md:w-fit border-none cursor-pointer shadow-md shadow-gray-200 hover:shadow-xl hover:shadow-gray-200 rounded-xl text-xl font-black bg-my-bg-third text-my-button-font active:shadow-none transition-all'
                                    type="submit"
                                >
                                    <span className='sm:w-full md:w-fit block py-2 px-4 box-border bg-my-bg-white border-2 border-my-button-border rounded-xl -translate-y-0.5 hover:-translate-y-1.5 active:translate-y-0 transition-all duration-100 ease-linear'>{ !!active ? 'EDITAR' : 'REGISTRAR'}</span>
                                </button>
                            </div>
                        </Form>

                    );
                }
            }
        </Formik>
    </div>
    
  )
}
