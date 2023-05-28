import React from 'react'
import { useLocation } from 'react-router-dom'



const StatePage = () => {
    const location = useLocation();
    // console.log('LOCATION STATE:',location.state.online); //state sent
    console.log('QUERY PARAM', location.search); // query params sent

    return (
        <div>
            <h1>State: {location.state.online ? 'User is online' : 'User is offline'}</h1>
        </div>
    )
}

export default StatePage