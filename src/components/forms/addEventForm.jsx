import { useState } from "react";
import { addEvent } from "../../services/events";
import { useCookies } from "react-cookie";

const AddEventForm = () =>{

  const [cookies] = useCookies(["token"])
  const [formData, setFormData] = useState({
        name: '',
        type: 'park',
        address: '',
        description: '',
        date: '',
        time: '',
    });


    const handleChange= (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
           await addEvent(formData, cookies.token)
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