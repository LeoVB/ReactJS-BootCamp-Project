import React, { useState } from 'react'

let red = 0;
let green = 200;
let blue = 150;

const loggedStyle = {
    backgroundColor: `rgb(${red},${green},${blue})`,
    color: 'white',
    fontWeight: 'bold'
}

const unloggedStyle = {
    backgroundColor: 'tomato',
    color: 'white',
    fontWeight: 'bold'
}

//Login / Logout buttons
const LoginButton = ({ loginAction, propStyle }) => {
    return (
        <button style={propStyle} onClick={loginAction}>Login</button>
    )
}

const LogoutButton = ({ logoutAction, propStyle }) => {
    return (
        <button style={propStyle} onClick={logoutAction}>Logout</button>
    )
}




const OptionalRender = () => {

    const [access, setAccess] = useState(false)
    const [nMessages, setNmessages] = useState(0)
    // const updateAccess = () => {
    //     setAccess(!access)
    // }

    const loginAction = () => {
        setAccess(true)
    }

    const logoutAction = () => {
        setAccess(false)
    }


    // let optionalButton = access ?
    //     <button onClick={updateAccess}>Logout</button>
    //     : <button onClick={updateAccess}>Login</button>;


    let optionalButton = access ?
        <LogoutButton propStyle={unloggedStyle} logoutAction={logoutAction}></LogoutButton>
        : <LoginButton propStyle={loggedStyle} loginAction={loginAction}></LoginButton>;


    let addMessage = () => {
        setNmessages(nMessages + 1)
    }

    // ? (Expresión true) && expresión => se renderiza la expresión
    // ? (Expresión false) && expresión => no se renderiza la expresión

    return (
        <div>
            {optionalButton}
            {/**n messages unread */}
            {/* { nMessages > 0 && nMessages === 1 && <p className='mt-2'> You have {nMessages} new message</p> }
            { nMessages > 1 && <p className='mt-2'>You have {nMessages} unread</p> }
            { nMessages === 0 && <p className='mt-2'>There are no messages</p> } */}

            {/**Ternay operator */}
            {access ? (
                <div>
                    {nMessages > 0 ?
                        <p className='mt-2'>You have {nMessages} new message{nMessages > 1 ? 's' : null}</p> :
                        <p className='mt-2'>There are no messages</p>}

                    <button onClick={addMessage}>{nMessages === 0 ? 'Add your first message' : 'Add new message'} </button>
                </div>
            ) : null}

        </div>
    )
}

export default OptionalRender