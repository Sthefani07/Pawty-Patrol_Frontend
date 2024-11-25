import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav>
     <Link to="/dashboard">Home</Link>
      <Link to="/locations">All Events</Link>
      <Link to="/add-event">Create Event</Link>
      <Link to="/auth">Login</Link>
    </nav>
  );
};

export default Navbar;
