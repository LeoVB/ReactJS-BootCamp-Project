import React, { useState, useRef } from 'react'

const RectanguloRGB = () => {

    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)
    const [intervalId, setIntervalId] = useState(null);

    const squareColor = {
        backgroundColor: `rgb(${red},${green},${blue})`
    }

    const squareSize = {
        height: '255px',
        width: '400px'
    }


    function generateColor(){
        setRed(Math.floor(Math.random() * 256));
        setGreen(Math.floor(Math.random() * 256));
        setBlue(Math.floor(Math.random() * 256));
    }

    const handleMouseEnter = () => {
        setIntervalId(setInterval(generateColor, 1000));
    }

    const handleMouseLeave = () => {
        clearInterval(intervalId);
        setIntervalId(null);
    }

    const forceStop = () =>{
        clearInterval(intervalId);
        setIntervalId(null);
    }

    return (
        <div>
            <div style={Object.assign({}, squareColor, squareSize)} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onDoubleClick={forceStop}>

            </div>
        </div>
    )
}

export default RectanguloRGB