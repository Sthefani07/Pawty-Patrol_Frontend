import React, { useState } from 'react';
import LoginForm from '../../components/auth/LoginForm';
import SignUp from '../../components/auth/SingUp.jsx';

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