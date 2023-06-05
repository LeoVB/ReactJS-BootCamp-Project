import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { Link, responsiveFontSizes } from '@mui/material'
import { Typography } from '@mui/material'
import { login, getAllPagedUsers, getAllUsers, getUserById, createUser, updateUser, deleteUser } from '../../services/axiosCRUDService'
import { textAlign } from '@mui/system';

const AxiosCRUDExample = () => {

    const authUser = (values) => {
        login(values.email, values.password)
            .then((response) => {
                if (response.data.token) {
                    alert(JSON.stringify(response.data))
                    sessionStorage.setItem('token', response.data.token)
                } else {
                    sessionStorage.removeItem('token')
                    throw new Error('Login failed')
                }
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`)
            })
    }


    const initialCredentials = {
        email: '',
        password: ''
    }

    const loginSchema = Yup.object().shape(
        {
            // recibe el mensaje de error
            email: Yup.string().email('Invalid email format').required('Email is required'),
            password: Yup.string().required('Password is required')
        }
    )

    // const navigate = useNavigate();

    //CRUD Examples

    const obtainAllusers = () => {
        getAllUsers()
            .then((response) => {
                alert(JSON.stringify(response.data.data))
                console.log(response.data);
            })
            .catch((error) => alert(`Something went wrong: ${error}`))
    }

    const obtainAllPagedusers = (page) => {
        getAllPagedUsers(page)
            .then((response) => {
                alert(JSON.stringify(response.data.data))
                console.log(response.data);
            })
            .catch((error) => alert(`Something went wrong: ${error}`))
    }

    const obtainUserById = (id) => {
        getUserById(id)
            .then((response) => {
                alert(JSON.stringify(response.data.data))
                console.log(response.data);
            })
    }

    const createNewUser = (name, job) => {
        createUser(name, job)
            .then((response) => {
                if (response.status === 201) {
                    alert(JSON.stringify(response.data))
                    console.log(response);
                }
                else {
                    throw new Error('User not created');
                }
            })
            .catch((error) => alert(`Something went wrong: ${error}`))
    }

    const updateUserById = (id, name, job) => {
        updateUser(id, name, job)
            .then((response) => {
                if (response.data && response.status === 200) {
                    alert(JSON.stringify(response.data))
                    console.log(response.data);
                }
                else{
                    throw new Error('User not found and not updated')
                }
            })
            .catch((error) => alert(`Something went wrong: ${error}`))
    }

    const deleteUserById = (id) => {
        deleteUser(id)
            .then((response) => {
                if (response.status === 204) {
                    alert(`User with id: ${id} successfully deleted`)
                   
                }
                else{
                    throw new Error('User not found and not deleted')
                }
            })
            .catch((error) => alert(`Something went wrong: ${error}`))
    }

    return (
        <div>
            <h4>Login Form</h4>
            <Formik

                initialValues={initialCredentials}
                //Validation with Yup
                validationSchema={loginSchema}

                onSubmit={async (values) => {
                    authUser(values)
                }}
            >



                {
                    //valores de formulario, 
                    //saber si usuario ha tocado o no campos
                    //si hay errores en formulario o campos,
                    // si se está enviando
                    //si hay cambiuos en algun campo, 
                    //cambio de foco
                    ({ values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur }) => (<Form>
                            <div>
                                <label htmlFor="email">Email</label>
                            </div>

                            <div>
                                <Field
                                    id="email"
                                    name="email"
                                    placeholder="example@gmail.com"
                                    type="email"
                                />
                            </div>

                            {/**email errors */}
                            {
                                errors.email && touched.email && (
                                    //es igual que el otro erroMessage (encerrado en un div)
                                    <ErrorMessage component={'div'} name="email" />

                                )
                            }


                            <div>
                                <label htmlFor="password">Password</label>
                            </div>
                            <div>
                                <Field id="password" name="password" type='password' placeholder="Password" />
                            </div>

                            {/**password errors */}
                            {
                                errors.password && touched.password && (
                                    <div>
                                        <ErrorMessage name="password" />
                                    </div>
                                )
                            }
                            <Typography variant='body2' color='GrayText' align='right' textAlign='center'>
                                {`Don't have an account yet? `}
                                <Link color={'inherit'} href='/register'>
                                    {'Register here'}
                                </Link>

                            </Typography>
                            <button type="submit">Submit</button>
                            {isSubmitting ? (<p>Login your credentials...</p>) : null}
                        </Form>)
                }




            </Formik>

            {/**Example buttons to test API responses */}
            <div>
                <button onClick={obtainAllusers}>
                    Obtain all users with axios
                </button>
                <button onClick={() => obtainAllPagedusers(2)}>
                    Get all paged users with axios
                </button>
                <button onClick={() => obtainUserById(1)}>
                    Get single user
                </button>
                <button onClick={() => createNewUser('morpheus', 'leader')}>
                    Create new user
                </button>
                <button onClick={() => updateUserById(1,'morpheus', 'Developer')}>
                    Update user
                </button>
                <button onClick={() => deleteUserById(1)}>
                    Delete user
                </button>
            </div>

        </div>
    )
}

export default AxiosCRUDExample