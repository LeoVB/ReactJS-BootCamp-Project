import React from 'react'
import Button from '@mui/material/Button';
import Copyritght from '../../components/pure/Copyritght';
import {useNavigate} from 'react-router-dom'
 
const DashBoardPage = () => {

    const navigate = useNavigate()

    const logout = () => {
        navigate('/login')
    }


    return (
        <div>
            <Button variant="contained" onClick={logout}>Logout</Button>
            <Copyritght></Copyritght>
        </div>
    )
}

export default DashBoardPage