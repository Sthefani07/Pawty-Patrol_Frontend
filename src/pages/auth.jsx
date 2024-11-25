import React, { useState } from 'react';
import LoginForm from '../components/forms/LoginForm.jsx';
import SignUp from '../components/forms/SignUp.jsx';

const Auth = () => {
  const [newUser, setNewUser] = useState(false);
  return (
    <>
    <div className='page-auth'>
      {newUser ? (
        <SignUp setNewUser={setNewUser} />
      ) : (
        <LoginForm setNewUser={setNewUser} />
      )}
      </div>
    </>
  );
};

export default Auth;