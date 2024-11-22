import axios from "axios";



 export const getEvents = (token) => {
    return axios
    .get('http://localhost:3000/api/locations', {
        headers: {"x-auth-token": token}, //pass the token in the authMiddleware
    })
    .then((res)=> res.data);
 };
    

    
export const addEvent = (eventData, token) => {
    return axios
    .post("http://localhost:3000/api/locations", eventData, {
        headers: {"x-auth-token": token} //pass token to the authMidleware
    });
}
    