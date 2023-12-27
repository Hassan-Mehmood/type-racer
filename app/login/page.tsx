import React from 'react';
import RegisterUser from './RegisterUser';
import LoginUser from './LoginUser';

export default function LoginPage() {
  return (
    <div className="flex justify-around ">
      <RegisterUser />
      <LoginUser />
    </div>
  );
}
