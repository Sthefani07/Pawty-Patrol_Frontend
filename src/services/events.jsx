import axios from "axios"; 

// GET events -----------------------------------------------------------

 export const getEvents = (token) => {
    return axios
    .get('http://localhost:3000/api/locations', {
        headers: {"x-auth-token": token}, //pass the token in the authMiddleware
    })
    .then((res)=> res.data);
 };
    
// POST new event ---------------------------------------------------------------------
    
export const addEvent = (eventData, token) => {
    return axios
    .post("http://localhost:3000/api/locations", eventData, {
        headers: {"x-auth-token": token} //pass token to the authMidleware
    });
}
    
// PUT ---------------------------------------------------------------------
// update a event by ID
export const updateEvent = (id, eventData, token) => 
    axios
    .put(`http://localhost:3000/api/locations/${id}`, eventData, {
        headers: {"x-auth-token": token} //pass token to the authMidleware/user token
    });



// DELETE  ---------------------------------------------------------------------
// delete a event by ID
export const deleteEvent = (id, token) => 
    axios
    .delete(`http://localhost:3000/api/locations/${id}`, {
        headers: {"x-auth-token": token} //pass token to the authMidleware/user token
    });