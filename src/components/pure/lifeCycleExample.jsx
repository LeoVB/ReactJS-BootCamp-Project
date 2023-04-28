/**
 * Ejemplo de componente de tipo clase que dispone de los métodos
 * de ciclo de visa
 */


import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class lifeCycleExample extends Component {
    
    constructor(props){
        super(props)
        console.log('CONSTRUCTOR: Cuando se instancia el componente')
    }


    componentDidMount(){
        console.log("DIDMOUNT: montaje de componente,antes de renderizar")
    }

    shouldComponentUpdate(){
        /**Si componente deberia o no actualizarse
         * return true / false
         */
    }

    componentDidUpdate(){
      console.log("DIDUPDATE: montaje de componente, despues de actualizarse")
    }

  render() {
    return (
      <div>

      </div>
    )
  }
}
