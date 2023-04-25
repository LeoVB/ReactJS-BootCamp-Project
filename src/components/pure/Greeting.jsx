import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Greeting extends Component {
  static propTypes = {
    name: PropTypes.string,      // para que se respete el tipo que dato que se solicita, en este caso name es solo string

  }

  myAge = 20

  constructor(props){ // propiedades o atributos propios que tendrá el html que recibe 
    super(props);
    this.state = { //info del component para modificar la vista (privado e inmutable)
        age : this.myAge
    } 
  }

  render() {
    return (
      <div>
        <h1>
            Hola {this.props.name}
        </h1>
        <h2>
            Tu edad es de {this.state.age}
        </h2>

        <div>
            <button onClick={this.birthday}>
                Cumplir años
            </button>
        </div>
      </div>
    )
  }


    birthday = () =>{
    this.setState((prevState) => ( // importante para cambiar estado en la vista, otherwise it wouldnt work
        {
           age:prevState.age+1 
        }
        ))
    }

}
