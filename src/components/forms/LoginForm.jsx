import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/Auth/AuthContext';
import { useState } from 'react';


const LoginForm = ({ setNewUser }) => {
const nav = useNavigate()
const {login} = useAuth()
const [formData, setFormData] = useState({
  email:'',
  password: '',
})
  const handleClick = () => {
    setNewUser(true);
  };

    function handleChange(e){
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  async function handleSubmit(e){
  e.preventDefault()
  await login(formData)
  nav('/dashboard')
}


const { logout } = useAuth();
  const nav1 = useNavigate();

  async function handleLogOut(e) {
    await logout();
alert("Goodbye! We’ll miss you. Come back soon to discover more exciting events for your furry friends!");
    nav1('/auth')
  }


return (
    <div className='forms'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} autoComplete='off'>
        <label htmlFor='email'>Email: </label>
        <input onChange={handleChange} type='email' id='email' name='email' placeholder='Email' />
        <label htmlFor='password'>Password: </label>
        <input onChange={handleChange}
          type='password'
          id='password'
          name='password'
          placeholder='Password'
          minLength='6'
        />
        <button type='submit' >
          Log In
        </button>
      </form>
      <p>
        Dont have an account? <button onClick={handleClick}>Sign Up</button><br></br><br></br>

        <button onClick={handleLogOut}>LogOut</button>
      </p>
    </div>
  );
};

export default LoginForm;
