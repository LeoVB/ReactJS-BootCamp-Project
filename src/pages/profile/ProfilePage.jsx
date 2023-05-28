import React from 'react'
import {useNavigate, useLocation} from 'react-router-dom'

const ProfilePage = ({user}) => {
    const navigate = useNavigate();

    const goBack = () =>{
        navigate(-1);
    }

    const navigatoTO = (path) =>{
        navigate(path)
    }

    return (
        <div>
            <h1>Your Profile</h1>
            <button onClick={goBack}>Go back</button>
            <button onClick={()=>navigatoTO('/tasks')}>Your tasks</button>
        </div>
    )
}

export default ProfilePage