/**
 * Ejemplo de uso de método componenteDidUpdate enm componente clase
 * y uso de hook en componente funcional
 */

import React, { Component, useEffect } from 'react'

export default class DidUpdate extends Component {

    componentDidUpdate(){
        console.log('Comportamiento cuando componente recibe props o cambia en su estado privado')
    }

  render() {
    return (
      <div>
        <h1>DidUpdate</h1>
      </div>
    )
  }
}


export const DidUpdateHook = () => {

    useEffect(() => {
      console.log('Comportamiento antes de que el componente sea cambiado al DOM (render)');

    })  // Se ejecuta solo una vez
    

  return (
    <div>
    <h1>DidMount</h1>
    </div>
  )
  
}