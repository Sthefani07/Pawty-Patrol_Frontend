import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Auth from './pages/auth.jsx'
import Navbar from './components/navBar/index.jsx';
import AuthProvider from './contexts/Auth/AuthContext.jsx';
//import Home from './pages/home.jsx';
import Locations from './pages/Locations.jsx'
import AddEvent from './pages/AddEvent.jsx';
import { useCookies } from 'react-cookie';
import './app.css'




function App() {
  return (
    <>
    <AuthProvider>
    <Navbar />
      <Routes>
        
        <Route path='/auth' element={<Auth />} />
        <Route path="/Dashboard" element={<Home />} />
        <Route path='locations' element={<Locations />} />
        <Route path='/Add-event' element={< AddEvent/>} />
      </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
