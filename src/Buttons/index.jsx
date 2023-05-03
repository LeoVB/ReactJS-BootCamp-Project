import React from 'react'
import './style.css'
export default function Toggle({ toggled, onClick }) {
    return (
        <div className={`toggle${toggled ? " night" : "" }`} onClick={onClick}>
            <div className='notch'>
             
            </div>
        </div>
    )
}
