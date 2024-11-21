import {Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'
import Auth from './pages/auth.jsx'
import Navbar from './components/navBar/index.jsx';
import AuthProvider from './contexts/Auth/AuthContext.jsx';
import Home from './pages/home.jsx';
import Locations from './pages/Locations.jsx'




function App() {
  return (
    <>
    <AuthProvider>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path='locations' element={<Locations />} />
      </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
