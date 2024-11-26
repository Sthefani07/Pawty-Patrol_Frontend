import { useState, useEffect } from "react";
import { addEvent } from "../../services/events";
import { useCookies } from "react-cookie";
import axios from "axios";

const AddEventForm = () =>{
  const [user,setuser] = useState(null)
  const [cookies] = useCookies(["token"])
  const [formData, setFormData] = useState({
        name: '',
        type: 'park',
        address: '',
        description: '',
        date: '',
        time: '',
    });
 

    const [loading, setLoading] = useState(true) //to track if user is still loading
    useEffect(()=>{
      async function getData(){
        try {
           let response= await axios.get("http://localhost:3000/api/auth", {
        headers: {"x-auth-token": cookies.token} //pass token to the authMidleware
    })
    setuser(response.data)
        } catch (error) {
          console.error(error)
          
        }
      }
      getData()
    },[cookies.token])

    const handleChange= (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user) {
        alert("User information not loaded yet. Please wait and try again.");
        return;
    }
        try {
          const newEvent = {
            ...formData, 
            userId: user._id 

          }
          //console.log(newEvent)
           await addEvent(newEvent, cookies.token)
           //console.log(cookies.token);
           //console.log(formData);
        alert('Event added successfuly')
        } catch (error) {
          console.error(error)
          alert("Failed to add event")
        }
       
    };


    return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Add Event</h2>
      <input type="text" name="name" placeholder="Event Name" onChange={handleChange} required />
      <select name="type" onChange={handleChange}>
        <option value="park">Park</option>
        <option value="cafe">Cafe</option>
        <option value="trail">Trail</option>
        <option value="cafe">Events</option>
      </select>
      <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
      <textarea name="description" placeholder="Description" onChange={handleChange} required />
      <input type="date" name="date" onChange={handleChange} required />
      <input type="time" name="time" onChange={handleChange} required />
      <button type="submit">Add Event</button>
    </form>
  );
}

export default AddEventForm