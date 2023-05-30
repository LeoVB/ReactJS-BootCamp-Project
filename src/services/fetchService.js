export const getAllUsers = async () =>{


    
    //fetch returns a promise
    let response = await fetch("https://reqres.in/api/users")
    console.log('response: ',response)
    // console.log("Status: " , response.status)
    // console.log("OK? ", response.ok)
    //we return the json

    return response.json()
}


export const getAllPagedUsers = async (page) =>{
    let url = `https://reqres.in/api/users?page=${page}`
    //console.log(url)
    let response = await fetch(url)
    console.log('response: ',response)
    return response.json()
}


export const getUserDetails = async (id) =>{
   // console.log(url)
    let response = await fetch(`https://reqres.in/api/users/${id}`)
    console.log('response: ',response)
    return response.json()
}
