import { Alert } from 'bootstrap';
import React, { useRef } from 'react'

const Child = ({ name, send, update }) => {

    const messageRef = useRef('')
    const nameRef = useRef('')

    function pressBtn() {
        const text = messageRef.current.value;
        alert(`Text in input: ${text}`)
    }

    function pressBtnParams(texto) {
        alert(`Text: ${texto}`);
    }

    function submitName(e){
        e.preventDefault();
        update(nameRef.current.value);
    }

    return (
        <div style={{ background: 'cyan', padding: '30px' }}>
            <p onMouseOver={() => console.log('Mouse over')}>Hello {name}</p>
            <button onClick={() => console.log('Button 1 pressed')}>
                Button 1
            </button>
            <button onClick={pressBtn}>
                Button 2
            </button>
            {/* asi se envian parametros desde acá */}
            <button onClick={() => pressBtnParams('Hello')}> 
                Button 3
            </button>
            <input placeholder='Send a text to your father'
                onFocus={() => console.log('Input focused')}
                onChange={(e) => console.log('Input changed:', e.target.value)}
                onCopy={() => console.log('Copied input')}
                ref={messageRef}
            />
            <button onClick={() => send(messageRef.current.value)}>Send Message</button>
            <div style={{ marginTop: '20px' }}>
                <form onSubmit={submitName}>
                    <input placeholder='New name' ref={nameRef}/>
                    <button type='submit'>Update name</button>
                </form>
            </div>
        </div>
    )
}

export default Child