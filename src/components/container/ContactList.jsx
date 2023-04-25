import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'
import ContactComponent from '../pure/Contact'

const ContactListComponent = () => {

    const leoContact = new Contact('Leonardo','Villegas','leo@gmail.com',true);

  return (
    <div>
        <div>
            <h1>
                Contactos:
            </h1>
        </div>
        <ContactComponent contact = {leoContact}></ContactComponent>
    </div>
  )
}

ContactListComponent.propTypes = {}

export default ContactListComponent