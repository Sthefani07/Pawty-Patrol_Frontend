import { Link } from "react-router-dom";

const Home = ()=> {
    return(
        <div className="home-container">
            <h1>Welcome to Pawty Patrol {username}!</h1>
            <p>Find and create events for your furry friends.</p>
            <Link to="/auth">
            <button>Get Started</button>
            </Link>
        </div>
    )
}

export default Home;