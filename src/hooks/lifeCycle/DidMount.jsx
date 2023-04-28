/**
 * Ejemplo de uso lifeCycle de ciclo de vida
 * en componente clase y el hook de ciclo de vida
 * en componetne funcional
 */

import React, { Component , useEffect } from 'react'

export  class DidMount extends Component {

componentDidMount(){
    console.log('Comportamiento antes de que el componente ssea añadido al DOM (render)')
}

  render() {
    return (
      <div>
        <h1>DidMount</h1>
      </div>
    )
  }
}



export const DidMountHook = () => {

    useEffect(() => {
      console.log('Comportamiento antes de que el componente ssea añadido al DOM (render)');

    }, [])  // Se ejecuta solo una vez
    

  return (
    <div>
    <h1>DidMount</h1>
    </div>
  )
}
