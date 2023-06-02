import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { getRandomJoke } from '../../services/axiosChuckNorrisService'
import { IconButton } from '@mui/material'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

const AxiosChuckNorrisJoke = () => {

    const [joke, setJoke] = useState(null)
    const [likedJokes, setLikedJokes] = useState([])


    const generateRandomJoke = () => {
        getRandomJoke()
            .then((response) => {
                console.log(response.data)
                setJoke(response.data)
            })
            .catch((error) => {
                alert('Something went wrong: ', error)
            })
    }

    // useEffect(() => {
    //     generateRandomJoke()


    // }, [])


    const addLikedJoke = () => {
        setLikedJokes((prevLikedJokes) => [...prevLikedJokes, joke.value]);
    };


    return (
        <div>

            {!joke ? (
                <>
                    <h3>Do you wanna hear a Chuck Norris joke? Then press the button</h3>
                    <button onClick={generateRandomJoke}>Genereate joke</button>
                </>
            ) : (
                <>
                    <h2>Chuck Norris random joke</h2>
                    {joke.categories[0] == 'explicit' ? <h4>WARNING: This joke might be triggering for some people</h4> : <h4>Chill</h4>}
                    <p>The random joke is:</p>
                    <p>{joke.value}</p>
                    <p className='mt-4'>Did you find this joke hilarious? Leave a like</p>
                    <IconButton onClick={() => { addLikedJoke(joke.value); generateRandomJoke(); }} aria-label="ThumbsUp">
                        <ThumbUpIcon />
                    </IconButton>

                    <IconButton onClick={generateRandomJoke} aria-label="delete" color="primary">
                        <ThumbDownAltIcon />
                    </IconButton>

                    <div>
                        <button onClick={generateRandomJoke}>Genereate new joke</button>

                    </div>
                </>
            )}


            <div>
                {/* ... */}
                <h3>Chuck Norris jokes that you've liked:</h3>
                {likedJokes.map((likedJoke, index) => (
                    <p key={index}>{likedJoke}</p>
                ))}
            </div>


        </div>
    )
}

AxiosChuckNorrisJoke.propTypes = {}

export default AxiosChuckNorrisJoke