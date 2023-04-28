/**
 * Ejemplo hooks:
 *  - useState()
 *  - useContext()
 */


import React, { useState,useContext } from 'react'


/**
 * @returns Componente1
 * Dipone de un contexto que va a tener un valor
 * que recibe del padre
 */
const miContexto = React.createContext(null)

 function Componente1() {

    /**Inicializamos estado vacio que va a rellenarse con los datos
     * del contexto del padre
     * 
     * OBJETIVO: Transmitir info sin necesidad de eventos
     */
    const state = useContext(miContexto);

  return (
    <div>
        <h1>
            El token es: { state.token }
        </h1>
        {/**Pintamos el componente 2 */}
        <Componente2></Componente2>
    </div>
  )
}



 function Componente2() {

    const state = useContext(miContexto);

  return (
    <div>
        <h2>
            La sesión es: {state.session}
        </h2>
    </div>
  )
}


export default function ComponenteConContexto() {

const estadoInicial = {
    token : '12345',
    session : 1
}


//Creamos el estado de este componente

const [sessionData, setSessionData] = useState(estadoInicial);


function actualizarSession(){
    setSessionData({
        token : 'JWT123456789',
        session : sessionData.session + 1
    });
}

  return (
   <miContexto.Provider value={sessionData}>
    {/**Todo lo que está acá dentro puede leer los datos de sessionData, ademas de actulizarse 
    Además si se actualizan los componentes de acá, tambien lo actualizan*/}
    <h1>***Ejemplo de useState() y useContext()*** </h1>
    <Componente1></Componente1>
    <button onClick={actualizarSession}>Actualiza session</button>
   </miContexto.Provider>
  )
}
