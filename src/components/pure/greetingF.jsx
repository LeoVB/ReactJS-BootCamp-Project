import React ,{ useState } from 'react'
import PropTypes from 'prop-types'

// funciones (no tenemos props ni state)
//props se definen manualmente

function GreetingF(props) { 

//Intro a useState (agreagado en linea 1) { useState }
//const [variable, metodo para actualizar] = useState(valor inicial)
const [age, setage] = useState(20) //useStateSnippet

const birthday = () =>{
    //se actualiza el state
    setage(age+1)
}

  return (
    <div>
        <h1>
            Hola {props.name} desde component funcional
        </h1>
        <h2>
            Tu edad es de {age}
        </h2>

        <div>
            <button onClick={birthday}>
                Cumplir años
            </button>
        </div>
      </div>
  )
}

GreetingF.propTypes = {
    name:PropTypes.string,
}

export default GreetingF
