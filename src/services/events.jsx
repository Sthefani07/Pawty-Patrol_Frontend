import axios
 from "axios";

 export const getEvents = () => axios.get('http://localhost:3000/api/locations').then((res)=> res.data)
export const addEvent = (eventData) => axios.post('http://localhost:3000/api/locations', eventData);