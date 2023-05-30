import React, { useState } from 'react'
import { getNumbers } from '../../services/ObservableService'

const ObservableExample = () => {

    const [number, setNumber] = useState(0)

    console.log(`subscription to observable`)
    

    const obtainNewNumbers = () =>{
        getNumbers.subscribe({
            next(newNumber){
               console.log('New number: ', newNumber)
               setNumber(newNumber) 
            },
            error(error){
                alert(`Something went wrong with your URL: ${error} (check the console)`)
                console.log('ERROR with the observable')
            },
            complete(){
                alert(`Finished with number: ${number}`)
                console.log('DONE with the observable')
            }
        })
    }
    


    return (
        <div>
            <h2>Number: {number}</h2>
            <button onClick={obtainNewNumbers}>Obtain numbers</button>
        </div>
    )
}

export default ObservableExample