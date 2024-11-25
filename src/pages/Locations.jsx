import { useEffect, useState } from "react";
import { deleteEvent, getEvents, updateEvent } from "../services/events";
import { useCookies } from "react-cookie";
//import { useNavigate } from "react-router-dom";

const Locations=() => {
    const [cookies] = useCookies(["token"])
    const[events, setEvents] = useState([])
    const [editingEvent, setEditingEvent] = useState(null)
    //const nav = useNavigate(); // move between pages
    const [formData, setFormData] = useState({
        name: '',
        type: 'park',
        address: '',
        description: '',
        date: '',
        time: '',
    }) //State for the edit form



    useEffect(()=>{
        async function fetchEvents() {
         const data = await getEvents(cookies.token) 
         setEvents(data)  
        }
        fetchEvents()
    }, [cookies.token]) //run this whenever the token changes


// delete event when user clicks "Delete" ----------------------------------------
    const handleDelete = async (id) => {
        if(window.confirm("Are you sure you want to delete this event?")){
            try {
                await deleteEvent(id, cookies.token) //delete in the backend
                alert("Event deleted successfully")
                setEvents(events.filter((event)=> event._id !== id )) //remove from the page
            } catch (error) {
                console.log("Failed to delete event", error);
                alert("Failed to delete event")
            }
        }
    };

// hsndle entering edit mode
   const handleEdit = (event)=> {
    setEditingEvent(event._id) //set the event to be edited
    setFormData(event)
   };

   //form change for editing
   const handleChange= (e) =>{
    setFormData({ ...formData, [e.target.name]: e.target.value})
   };


   //saving changes to the event
    const handleSubmit = async (e) => {
        e.preventDefault();
            try {
                await updateEvent(editingEvent, formData, cookies.token) //delete in the backend
                alert("Event updated successfully")
                setEvents(events.map((event)=>
                    event._id === editingEvent ? { ...formData, _id: editingEvent} : event
                )
            );
                setEditingEvent(null) //exit edit mode
            } catch (error) {
                console.log("Failed to update event", error);
                alert("Failed to update event")
            }
        }

        //function to change time to 12h format
        const TimeTo12h = (time24) => {
            const [hours, minutes] = time24.split(":");
            const hours12 = hours % 12 || 12;
            const amPM = hours >= 12 ? "PM" : "AM";
            return `${hours12}:${minutes} ${amPM}`
        }
    


    return(
        <div className="page-locations"> 
            <h1>All Events</h1>
             <p> No more scrolling for hours to find pet-friendly spots – Pawty Patrol puts exciting events and hangouts right at your fingertips! Whether it’s a dog yoga session, a cat adoption event, or a pup-friendly hike, you’ll always have something fun to look forward to. Find and create unforgettable events for your furry friends and make every moment a paw-some adventure!</p>
            {events.map((event) =>(
                <div key={event._id} className="event-card">
                    <h2>{event.name}</h2>
                    <p>{event.description}</p>
                    <p>{event.date} at { TimeTo12h(event.time)}</p>
                    <button onClick={() => handleEdit(event)} >Edit</button>
                    <button onClick={() => handleDelete(event._id)} >Delete</button>
                </div>
            ))}


{/* Form to Edit event */}

       <form onSubmit={handleSubmit} className="form-container" > 
        <h2> Edit Event</h2>
        <input 
        type="text"
        name="name"
        placeholder="Event Name"
        value={formData.name}
        onChange={handleChange}
        required
        />

        <select name="type" value={formData.type} onChange={handleChange}>
            <option value="park">Park</option>
            <option value="cafe">Cafe</option>
            <option value="trail">Trail</option>
        </select>
          <input 
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
        required
        />

        <textarea 
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
        />

        <input 
        type="date"
        name="date"
        placeholder="Date"
        value={formData.date.split("T")[0]} 
        onChange={handleChange}
        required
        />

        <input 
        type="time"
        name="time"
        placeholder="Time"
        value={formData.time}
        onChange={handleChange}
        required
        />
        <button type="submit">Save Changes</button>
        <button type="button" onClick={() => setEditingEvent(null)} >Cancel</button>
       </form>



        </div>
    )
}

export default Locations;