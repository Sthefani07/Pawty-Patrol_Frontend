import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to='/auth'>Login</Link>
      <Link to='/home'>Home</Link>
    </nav>
  );
};

export default Navbar;