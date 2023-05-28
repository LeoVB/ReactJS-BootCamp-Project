import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ROLES } from '../../../models/Roles.enum'

const RegisterFormik = () => {
    const submit = (values) => {
        console.log('Register user');
    };

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirmation: '',
        role: ROLES.USER
    };

    const registerSchema = Yup.object().shape({
        username: Yup.string()
            .min(6, 'Username too short')
            .max(12, 'Username too long')
            .required('Username required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().min(6, 'Password too short').required('Password is required'),
        confirmation: Yup.string()
            .oneOf([Yup.ref('password')], 'Passwords must match')
            .required('You must confirm your password'),
    });

    return (
        <div>
            <h4>Register Formik</h4>
            <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ errors, touched, isSubmitting }) => (
                    <Form>
                        <label htmlFor="username">Username</label>
                        <Field id="username" name="username" placeholder="Your username" type="text" />
                        {errors.username && touched.username && <div>{errors.username}</div>}

                        <label htmlFor="email">Email</label>
                        <Field id="email" name="email" placeholder="example@gmail.com" type="email" />
                        {errors.email && touched.email && <div>{errors.email}</div>}

                        <label htmlFor="password">Password</label>
                        <Field id="password" name="password" type="password" placeholder="Password" />
                        {errors.password && touched.password && <div>{errors.password}</div>}

                        <label htmlFor="confirmation">Confirm Password</label>
                        <Field
                            id="confirmation"
                            name="confirmation"
                            type="password"
                            placeholder="Confirmation"
                        />
                        {errors.confirmation && touched.confirmation && <div>{errors.confirmation}</div>}

                        <button type="submit">Register user</button>
                        {isSubmitting ? (<p>Login your credentials...</p>) : null}
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default RegisterFormik;