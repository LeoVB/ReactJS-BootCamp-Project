import React, { useEffect, useState } from 'react'
import { getAllUsers } from '../../services/fetchService'
import { getAllPagedUsers } from '../../services/fetchService'
import { getUserDetails } from '../../services/fetchService'
import { height } from '@mui/system'


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


    return (
        <div>
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
                            <img alt='Avatar' src={selectedUser.avatar} style={{height :'50px', width:'50px'}}/>
                        </div>
                    ): 
                    
                    (<div>Nothing here</div>)

                    }

            </div>
        </div>
    )
}

export default FetchExample