import React, { useState } from 'react';
import LoginForm from '../components/forms/LoginForm.jsx';
import SignUp from '../components/forms/SignUp.jsx';

const Auth = () => {
  const [newUser, setNewUser] = useState(false);
  return (
    <>
      {newUser ? (
        <SignUp setNewUser={setNewUser} />
      ) : (
        <LoginForm setNewUser={setNewUser} />
      )}
    </>
  );
};

export default Auth;