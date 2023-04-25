import React from 'react'
import PropTypes from 'prop-types'
import {Contact} from '../../models/contact.class'

const ContactComponent = ({ contact }) => {
  return (
    <div>
    
      <h2>
         Nombre: { contact.name }  {contact.lastName }
      </h2>
      <h3>
         Email : { contact.email }
      </h3>
      <h4>
         Estado de contacto: { contact.connected ? 'Online':'Offline'}
      </h4>
      
    </div>
  )
}

ContactComponent.propTypes = {
    contact:PropTypes.instanceOf(Contact)
}

export default ContactComponent