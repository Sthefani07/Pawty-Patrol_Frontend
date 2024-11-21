import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/auth">Login</Link>
      <Link to="/locations">Events</Link>
      <Link to="/add-event">Create Event</Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
};

export default Navbar;
