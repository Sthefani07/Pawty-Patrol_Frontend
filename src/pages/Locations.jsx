import { useEffect, useState } from "react";
import { getEvents } from "../services/events";
import { useCookies } from "react-cookie";

const Locations=() => {
    const [cookies] = useCookies(["token"])
    const[events, setEvents] = useState([])

    useEffect(()=>{
        async function fetchEvents() {
         const data = await getEvents(cookies.token) 
         setEvents(data)  
        }
        fetchEvents()
    }, [cookies.token])


    return(
        <div>
            <h1>All Events</h1>
            {events.map((event) =>(
                <di key={event._id}>
                    <h2>{event.name}</h2>
                    <p>{event.description}</p>
                    <p>{event.date} at {event.time}</p>
                </di>
            ))}
        </div>
    )
}

export default Locations;