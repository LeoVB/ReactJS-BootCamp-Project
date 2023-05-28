import React from 'react'
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom'

const Homepage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();


    const handleNavigate = (path) => {
        navigate(path)
    }

    const goBack = () => {
        navigate(-1);
    }

    const goForward = () => {
        navigate(1)
    }


    //Pasar parametros por rutas
    const navigateProps = (path) => {
        // navigate(`${path}?online=true`, { replace: false });
        setSearchParams({ online: 'true' })
        navigate(`${path}?online=true`, { // query params
            state: {
                online: true
            }, replace: false
        })
        // navigate(path, {
        //     state: {
        //         online: true
        //     },
        //     replace: false
        
    }

    console.log(location.pathname)
    return (
        <div>
            <h1>
                Home Page
            </h1>
            <div>
                <button onClick={() => handleNavigate('/profile')}>
                    Go to profile
                </button>
                <button onClick={() => navigateProps('/onlineState')}>
                    Go to state / Query params
                </button>

            </div>
        </div>
    )
}

export default Homepage