import React from 'react'

const AsyncExample = () => {

    async function generateNumber() {
        return 1;
    }


    async function generatePromiseNumber() {
        //resolve returns a value
        return Promise.resolve(2)
    }

    function obtainNumber() {
        //we get the numbres from the "server", .then makes the alert wait until we get the number from the server
        //.catch is for the errors, same logic as .then
        generateNumber()
            .then((response) => alert(`Response : ${response}`))
            .catch((error) => alert(`Something went wrong: ${error}`))
    }

    function obtainNumberPromise() {
        generatePromiseNumber()
            .then((response) => alert(`Response : ${response}`))
            .catch((error) => alert(`Something went wrong: ${error}`))
    }


    async function saveSessionsStorage(key, value) {
        sessionStorage.setItem(key, value);

        return Promise.resolve(sessionStorage.getItem(key))
    }

    function showStorage() {
        //.then is necessary cause the method called returns a Promise
        saveSessionsStorage('name', 'Leo')
            //Callback is what executes at certain moment, in this case, until we receive the answerm  of the promise
            .then((response) => {
                let value = response;
                alert(`Saved Name: ${value}`)
            })
            .catch((error) => alert(`Something went wrong: ${error}`))
            .finally(() => console.log('Name saved and retreived'))
        //Finally does not return anything, it only executes at the end, when everything is resolved
    }

    async function obtainMessage() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve('Hello world'), 2000)
        });

        let message = await promise;

        await alert(`Message received: ${message}`);
    }



    const returnError = async () => {
        //Promises execute something, that it'll work in the future, not necessary right now
        await Promise.reject(new Error('Ups'))
    }


    const consumeError = () => {
        returnError()
            .then((response) => alert(`Responses is ok: ${response}`))
            .catch((error) => alert(`Something went wrong: ${error}`))
            .finally(() => alert('Finally executed'))
    }


    const urlNotFound = async() =>{
        try {
            //petition to obtain values from URL's
            let response = await fetch('https://invalidURL.com');
            alert(`Response: ${JSON.stringify(response)}`)
        } catch (error) {
            alert(`Something went wrong with your URL: ${error} (check the console)`)
        }
    }


    const multiplePromise = async () =>{
        let results = await Promise.all(
            [
                fetch('https://reqres.in/api/users'),
                fetch('https://reqres.in/api/users?page=2')
            ]
        ).catch((error) => alert(`Something went wrong with your URL: ${error} (check the console)`) )
    }


    return (
        <div>
            <button onClick={obtainNumber}>Generate number</button>
            <button onClick={obtainNumberPromise}>Generate promise number</button>
            <button onClick={showStorage}>Save data</button>
            <button onClick={obtainMessage}>Receive message in 2 seconds</button>
            <button onClick={consumeError}>Show error</button>
            <button onClick={urlNotFound}>Show error from request</button>
            <button onClick={multiplePromise}>Multiple promises</button>
        </div>
    )
}

export default AsyncExample