/**
 * Ejemplo para entender el uso de props.children
 */

import React from 'react'

export default function Ejemplo4(props) {
  return (
    <div>
        <h1>***Ejemplo de CHILDREN PROPS***</h1>
        <h2>
            Nombre: { props.nombre }
            {/**porps.children pinta por defecto
            aquello que se encuentren en las etiquetas de aperturar y cierre
            de este componente, desde el componente de orden superior */}
            {props.children}
        </h2>
    </div>
  )
}
