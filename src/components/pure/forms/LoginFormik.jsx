import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { Link } from '@mui/material'
import { Typography } from '@mui/material'

//Estructura del objeto (parecido a PropTypes)
const loginSchema = Yup.object().shape(
    {
        // recibe el mensaje de error
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().required('Password is required')
    }
)

const LoginFormik = () => {

    const initialCredentials = {
        email: '',
        password: ''
    }

    const navigate = useNavigate();

    return (
        <div>
            <h4>Login Form</h4>
            <Formik

                initialValues={initialCredentials}
                //Validation with Yup
                validationSchema={loginSchema}

                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 2000));
                    alert(JSON.stringify(values, null, 2));
                    await localStorage.setItem('credentials', values)
                    navigate('/profile')
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
                            <Typography variant='body2' color='GrayText' align='right'>
                            { `Don't have an account yet? `}
                            <Link color={'inherit'} href='/register'>
                            { 'Register here' }
                            </Link>

                            </Typography>
                            <button type="submit">Submit</button>
                            {isSubmitting ? (<p>Login your credentials...</p>) : null}
                        </Form>)
                }




            </Formik>

        </div>
    )
}

export default LoginFormik