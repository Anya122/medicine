import React from 'react';
import s from './Login.module.scss';
import LoginPage from './LoginPage/LoginPage';
import BackMedicine from './BackMedicine/BackMedicine';


function Login() {
  
  return (
    <div className={s.appWrapper}>
        <BackMedicine/>
        <LoginPage/>
    </div>
  );
}

export default Login;
