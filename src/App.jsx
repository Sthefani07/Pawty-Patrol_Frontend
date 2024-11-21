
import {Routes, Route} from 'react-router-dom'
import Home from './pages/homePage/home.jsx'
import AuthPage from './pages/auth/index'




function App() {
  return (
    
      <Routes>
        <Route path='/auth' element={<AuthPage />} />
        <Route path="/auth" element={<Home />} />
      </Routes>
    
  );
}

export default App;
//console.log(import.meta.env.VITE_APIkey)