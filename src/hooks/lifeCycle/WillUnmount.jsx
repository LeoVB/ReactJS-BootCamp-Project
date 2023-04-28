/**
 * Ejemplo de uso de método componenteWillUnmount enm componente clase
 * y uso de hook en componente funcional
 */

import React, { Component, useEffect } from 'react'

export default class WillUnmount extends Component {

    componentWillUnmount() {
        console.log('Comportamiento cuando componente antes de que el componente desaparezca')
    }

    render() {
        return (
            <div>
                <h1>WillUnmount</h1>
            </div>
        )
    }
}


export const WillUnmountHook = () => {

    useEffect(() => {
        //no ponemos nada

        return () => {
            console.log('Comportamiento cuando componente antes de que el componente desaparezca');
        }
    }, [])



    return (
        <div>
            <h1>WillUnmount</h1>
        </div>
    )

}