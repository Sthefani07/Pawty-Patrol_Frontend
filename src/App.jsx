import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import AuthPage from './pages/auth.jsx'
import Navbar from './components/navBar/index.jsx';




function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/auth' element={<AuthPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
