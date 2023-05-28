import React from 'react'

//Material UI components
import { Link } from '@mui/material'
import { Typography } from '@mui/material'


const Copyritght = () => {
  return (
    <Typography variant='body2' color='GrayText' align='center'>
        { 'Copyright (C) ' }
        <Link color="inherit" href='https://imaginaformacion.com'>
           Imagina Formación
        </Link>
        { ' ' } 
        { new Date().getFullYear() }
    </Typography>
  )
}

export default Copyritght