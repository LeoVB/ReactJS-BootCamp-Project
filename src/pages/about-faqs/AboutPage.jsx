import React from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
const AboutPage = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const handleNavigate = (path) =>{
        navigate(path)
    }

    const goBack = () =>{
        navigate(-1);
    }

    const goForward = () =>{
        navigate(1)
    }

    console.log(location.pathname)
    return (
        <div>
            <h1>
                About | FAQs
            </h1>
            <div>
                <button onClick={() => handleNavigate('/')}>
                    Go to home
                </button>
                <button onClick={goBack}>
                    Go back
                </button>
                <button onClick={goForward}>
                    Go forward
                </button>
            </div>
        </div>
    )
}

export default AboutPage