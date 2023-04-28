/**
 * Componente que va a contener formulario para 
 * autenticación de usuarios
 */

import React, { useState } from 'react'

export default function LoginForm() {

    const initialCredencials = [
        {
            user:' ',
            password: ''
        }
    ]

    const [credencials, setCredencials] = useState(initialCredencials)

    return (
        <div>

        </div>
    )
}

