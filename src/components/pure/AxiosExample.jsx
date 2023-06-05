import React, { useState } from 'react'
import { getRandomUser } from '../../services/axiosService'
import { useEffect } from 'react'

const AxiosExample = () => {

    const [user, setUser] = useState(null)

    // useEffect(() => {
    //     obtainUser()
    // }, [])

    const obtainUser = () => {
        getRandomUser()
            .then((response) => {
                console.log(response)
                setUser(response.data.results[0])
                console.log(response.data.results)
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`);
            })
    }

    return (
        <div>
            <h1>Axios example</h1>
            {
                user ?
                    (
                        <div>
                            <h2>{user.name.title} {user.name.first} {user.name.last}</h2>
                            <h3>{user.email}</h3>
                            <img alt='Avatar' src={user.picture.large} />
                            <div>
                                <button onClick={obtainUser}>
                                    Generate new user
                                </button>
                            </div>
                        </div>

                    )
                    :
                    (
                        <div>
                            <p>Generate a new user</p>
                            <button onClick={obtainUser}>
                                Generate
                            </button>
                        </div>
                    )
            }
        </div>
    )
}

export default AxiosExample