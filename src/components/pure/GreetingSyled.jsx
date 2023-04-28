import React, { useState } from 'react'

//definiendo estilos en constantes
// ? Estilo para usuario loggeado
const loggedStyle = {
    color: 'cyan'
};

//?Estilo para usuario no loggeado
const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}

const GreetingStyled = (props) => {

    /**
     * Generamos estado para el componente 
     * y así controlar si el usuario está loggeado
     */

    const [logged, setLogged] = useState(false)

    const greetingUser = (<p>Hola, {props.name}</p>);
    const pleaseLoging = (<p>Please Login</p>);

    return (
        /**Operador ternario!!!!!!!!!!!!!!!!!
         *          loggeuado? True       :   false
         */
        <div style={logged ? loggedStyle : unloggedStyle}>

            {logged ?
                greetingUser
                :
                pleaseLoging
            }


            <button onClick={() => {
                console.log('Botón pulsado');
                setLogged(!logged);
            }}>
                {logged ? 'Logout' : 'Login'}
            </button>
        </div>
    )
}

export default GreetingStyled;
