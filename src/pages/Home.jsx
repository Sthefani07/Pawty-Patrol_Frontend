import { useAuth } from '../contexts/Auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Home = () => {
  const { logout } = useAuth();
  const nav = useNavigate();

  function handleLogOut(e) {
    logout();
    nav('/auth')
  }
  return (
    <div className="home-container">
            <h1>Welcome to Pawty Patrol!</h1>
            <p>Find and create events for your furry friends.</p>
            <Link to="/locations">
            <button>Get Started</button>
            </Link>




      <h1>Welcome to your Dashboard</h1>
      <button onClick={handleLogOut}>LogOut</button>
    </div>
  );
};

export default Home;














