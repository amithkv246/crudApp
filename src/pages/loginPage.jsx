import React, { useEffect, useState } from 'react';
import FloatingInput from '../components/floatingInput';
import Button from '../components/button';
import Heading1 from '../components/heading1';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateIsLoggedIn, updateLoginPassword } from '../redux/slice';

function LoginPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [login, setlogin] = useState({ username: "", password: "" });
  const loginPasswordVar = useSelector((state) => state.counter.loginPassword)

  const handleSubmit = () => {
    localStorage.setItem('userCredentials', JSON.stringify(login))
    dispatch(updateIsLoggedIn(true))
    navigate("/home")
  }

  const handleLoginPassword = (e) => {
    setlogin((prev) => ({ ...prev, password: e.target.value }))
    dispatch(updateLoginPassword(e.target.value))
  }

  return (
    <>
      <div className='d-flex flex-row justify-content-center align-items-center' style={{ height: '100svh', backgroundImage: "url('./loginbg/carcolor.png')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <div className='d-flex flex-column justify-content-between p-4 rounded-3 text-white bg-secondary bg-opacity-50' style={{ width: '20rem', minHeight: '25rem', outline: "none", boxShadow: '0px 0px 5px 3px #FFFFFF' }}>
          <Heading1 value={'Login'} />
          <FloatingInput type={'text'} label={'Username'} name={'username'} onChange={(e) => setlogin((prev) => ({ ...prev, username: e.target.value }))} />
          <FloatingInput type={'password'} label={'Password'} name={'password'} value={loginPasswordVar} onChange={(e) => handleLoginPassword(e)} />
          <Button value={'Login'} onClick={handleSubmit} />
          <p className='text-center fs-6'>Don't have an account? <Link className='fw-bold text-decoration-none text-white' to="/register">Register Now</Link></p>
        </div>
      </div>
    </>
  );
}

export default LoginPage;