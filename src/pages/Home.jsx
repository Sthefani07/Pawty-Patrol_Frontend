import { useAuth } from '../contexts/Auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Home = () => {
  const { logout } = useAuth();
  const nav = useNavigate();

  async function handleLogOut(e) {
    await logout();
    nav('/auth')
  }
  return (
    <div className="page-home">
            <h2>Pawty Patrol!</h2>
            <Link to="/locations">
            <button>Get Started</button>
            </Link>
            
            
            <style>
@import url('https://fonts.googleapis.com/css2?family=Agbalumo&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Moo+Lah+Lah&family=Ribeye&display=swap');
</style>


      {/* <button onClick={handleLogOut}>LogOut</button> */}
    </div>
  );
};

export default Home;














