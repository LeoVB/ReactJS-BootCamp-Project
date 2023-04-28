import React, { useEffect } from 'react'

export default function AllCycles() {

    useEffect(() => {
        console.log('Componente actualizado')

        const intervalID = setInterval(() => {  //cada segundo se actualiza el componente
            document.title = `${new Date()}`
            console.log('Actualización del componente')
        }, 1000);

        return () => {
            console.log('Componente va a desaparecer')
            document.title = 'Tiempo detenido'
            clearInterval(intervalID);
        }
    }, [])

    return (
        <div>

        </div>
    )
}
