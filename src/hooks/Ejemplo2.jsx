/** Ejemplo de uso de los siguientes hooks;
 *   -useState()
 *   -useRef()
 *   -useEffect()
*/

import React, { useState,useRef,useEffect } from 'react'

export default function Ejemplo2() {

//vamos a crear dons contadores distintos
//cada uno en un estado diferente

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0)

    //creamos referencia con useRef() para asociar variable
    //con un elemento del dom del componente html (en vez de usar Jqueryzzzzz)

    const miRef = useRef();

    function incrementar1(){
        setContador1(contador1+1);

    }

    function incrementar2(){
        setContador2(contador2+1);
    }


    /**TRabajando con useEffect()
     * 
     */

    /**
     * ?Case 1: Ejecutar siempre un snippet de codigo
     * cada vez que haya cambio en estado de componente se ejecuta aquello que esté adentro del useEffect()
     * 
     */


    // useEffect(() => {
    //     console.log("CAMBIO EN EL ESTADO DEL COMPONENTE");
    //     console.log('MOSTRANDO REFERENCIA AL DOM');
    //     console.log(miRef);
    // })
    

    /**
     * ? Case 2: Ejecutar solo en algunos casos(solo cuando cambie contador1)
     */

    // useEffect(() => {
    //     console.log("CAMBIO EN EL ESTADO DEL CONTADOR1");
    //     console.log('MOSTRANDO REFERENCIA AL DOM');
    //     console.log(miRef);
     
    // }, [contador1]) //parametros que sufren cambios
    

    /**
     * ? case 3: Ejecutar solo cuando cambien contador1 o contador2 
     */

     useEffect(() => {
        console.log("CAMBIO EN EL ESTADO DEL CONTADOR1 o CONTADOR2");
        console.log('MOSTRANDO REFERENCIA AL DOM');
        console.log(miRef);
     
    }, [contador1,contador2]) //parametros que sufren cambios






    
  return (
    <div>
      <h1>***Ejemplo de useState(), useRef() y useEffect()***</h1>
      <h2>Contador1: {contador1}</h2>
      <h2>Contador2: {contador2}</h2>
      {/*Elemnto referenciado*/}
      <h4 ref={miRef}>
            Ejemplo de elemento referenciado
      </h4>
      <div>
        <button onClick={incrementar1}>Incrementar contador 1</button>
        <button onClick={incrementar2}>Incrementar contador 2</button>
      </div>
    </div>
  )
}

