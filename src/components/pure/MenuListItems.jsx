import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { HomeIcon, SettingsAccessibility, SettingsIcon, Task } from '@mui/icons-material'
import { Button } from 'bootstrap'


const MenuListItems = ({ list }) => {

const getIcon = (icon) => {
    switch (icon) {
        case 'HOME':
            return (<Home />)
        case 'TASKS':
            return (<Task />)
        case 'SETTINGS':
            return (<Settings />)
        default:
            return (<Home />)
    }
}


    const navigate = useNavigate();

    const navigatoTo = (path) =>{
        navigate(path)
    }


    return (
        <List>
            {list.map(({text,path,icon}, index) =>{
                {
                    <ListItem key={index} components={Button} onClick={() =>{ navigatoTo(path)}}>
                        <ListItemIcon>
                            {getIcon(icon)}
                        </ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                }
            })}
        </List>
    )

}


export default MenuListItems