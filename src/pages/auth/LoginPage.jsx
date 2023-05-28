import React from 'react'
import LoginFormik from '../../components/pure/forms/LoginFormik'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LoginPage = ({ logged }) => {


  // if (!logged) {
  //   alert('User not logged, redirecting to login...'); // Mostrar alerta si el usuario no está logueado
  // }

  return (
    <div>
      <h1>Login page</h1>
      <LoginFormik></LoginFormik>
    </div>
  )
}

export default LoginPage