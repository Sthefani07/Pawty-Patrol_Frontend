import { useAuth } from '../contexts/Auth/AuthContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { logout } = useAuth();
  const nav = useNavigate();

  function handleLogOut(e) {
    logout();
    nav('/auth')
  }
  return (
    <div>
      <h1>Home page only users ..testing..</h1>
      <button onClick={handleLogOut}>LogOut</button>
    </div>
  );
};

export default Home;














