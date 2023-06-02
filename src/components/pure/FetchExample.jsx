import React, { useEffect, useState } from 'react'
import { getAllUsers } from '../../services/fetchService'
import { getAllPagedUsers } from '../../services/fetchService'
import { getUserDetails } from '../../services/fetchService'
import { height } from '@mui/system'
import { loginPetition } from '../../services/fetchService'

const FetchExample = () => {

    const [users, setUsers] = useState([])
    const [pages, setPages] = useState(2)
    const [totalUsers, setTotalUsers] = useState(2)
    const [usersPerPage, setUsersPerPage] = useState(6)
    const [selectedUser, setSelectedUser] = useState()

    useEffect(() => {
        //se ejecuta solo la primera vez
        obtainUsers();

    }, [])


    const obtainUsers = () => {
        getAllUsers()
            .then((response) => {
                console.log('All users: ', response.data)
                setUsers(response.data)
                setTotalUsers((response.total))
                setUsersPerPage((response.per_page))
                setPages((response.total_pages))
            })
            .catch((error) => alert(`Error with retreiving the users: ${error}`))
            .finally(() => {
                console.log('Ended obtaining users: ')
                console.table(users);
            })
    }


    const obtainPagedUsers = (page) => {
        getAllPagedUsers(page)
            .then((response) => {
                console.log('All paged users', response.data)
                setUsers(response.data)
                setTotalUsers((response.total))
                setUsersPerPage((response.per_page))
                setPages((response.total_pages))
            })
            .catch((error) => alert(`Error with retreiving the users: ${error}`))
            .finally(() => {
                console.log('Ended obtaining paged users: ')
            })
    }


    const obtainSpecificUserDetails = (id) => {
        getUserDetails(id)
            .then((response) => {
                console.log('Specific user', response.data)
                setSelectedUser(response.data)

            })
            .catch((error) => alert(`Error with retreiving the user: ${error}`))
            .finally(() => {
                console.log('Ended obtaining paged specific user: ')
                console.table(selectedUser)
            })
    }


    const login = () =>{
        loginPetition('eve.holt@reqres.in', 'cityslicka')
        .then((response) => {
            console.log('TOKEN', response.token)
            sessionStorage.setItem('Token',response.token)

        })
        .catch((error) => alert(`Error while login user: ${error}`))
        .finally(() => {
            console.log('User logged ')
        })
    }

    return (
        <div>
        <button onClick={login}> Login</button>
            <h2>Users:</h2>
            {users.map((user, index) =>
            (<p key={index} onClick={() => obtainSpecificUserDetails(user.id)}>
                {user.first_name} {user.last_name}
            </p>)
            )}

            <p>Showing {usersPerPage} users out of {totalUsers}</p>
            <button onClick={() => obtainPagedUsers(1)}>
                1
            </button>

            <button onClick={() => obtainPagedUsers(2)}>
                2
            </button>
            <div>
                <h3>
                    User details:
                </h3>
                {selectedUser ?
                    (
                        <div>
                            <p>Name: {selectedUser.first_name}</p>
                            <p>Last name: {selectedUser.last_name}</p>
                            <p>Email: {selectedUser.email}</p>
                            <img alt='Avatar' src={selectedUser.avatar} style={{height :'150px', width:'150px'}}/>
                        </div>
                    ): 
                    
                    (<div>Nothing to show here</div>)

                    }

            </div>
        </div>
    )
}

export default FetchExample