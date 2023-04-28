/*

Ejemplo de uso del Hook useState

Crear un componente de tipo función y acceder a su estado
privado a través del hook y además, poder modificarlo

*/ 

import React, { useState } from 'react'

export default function Ejemplo1()  {


  //Valor inicial para un contador
  const valorInicial = 0;

  //valor inicial para una persona

  const personaInicial = {
    nombre : 'Leo',
    email : 'leoleo19@gmail.com'
  }


  /*queremos que el valorInicial y personaInicial sea parte del estado del componente
  para poder gestionar su cambio y que este se vea reflejado en la vista del componente
  
  
  const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
        declaracion, declaraMetodo   = valor inical   
  */ 

  const [contador, setContador] = useState(valorInicial);
  const [persona, setPersona] = useState(personaInicial);

  /**
   *Funcion para actualizar el estado privado que contiene el contador 
   */

  function incrementaContador(){
      //? funcionParaCambiar (nuevoValor)
      setContador(contador +1 );
  }


  /**
   * 
   * Funcionm para actualizar estado de persona en el componente
   */

   function actualizaPersona(nombre){
    setPersona({
      nombre: 'Pepe',
      email : 'Pepe@gmail.com'
    })
  }


  
  return (
    <div>
      <h1>***Ejemplo de useState()***</h1>
      <h2>Contador: {contador}</h2>
      <h2>Datos de la persona persona </h2>
      <h3>Nombre: {persona.nombre}</h3>
      <h3>Email: {persona.email}</h3>
      {/* bloque debotones para actualizar estado de componente */}
      <button onClick={incrementaContador}>Incrementa contaddor</button>
      {/*párametro de actualizaPersona() no se pasa por parentesis, se pasa por comillas actualizaPersona'Llexo'*/}
      <button onClick={actualizaPersona}>Actualiza persona</button> 
      
    </div>
  )
}

