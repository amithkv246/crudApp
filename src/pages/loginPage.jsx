import React, { useEffect, useState } from 'react';
import FloatingInput from '../components/floatingInput';
import Button from '../components/button';
import Heading1 from '../components/heading1';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateIsLoggedIn } from '../redux/slice';

function LoginPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [login, setlogin] = useState({ username: "", password: "" });



  const handleSubmit = () => {
    localStorage.setItem('userCredentials', JSON.stringify(login))
    dispatch(updateIsLoggedIn(true))
    navigate("/home")
  }


  return (
    <>
      <div className='d-flex flex-row justify-content-center align-items-center' style={{ height: '100svh', backgroundImage: "url('./loginbg/carcolor.png')", backgroundSize: '100svw auto', backgroundRepeat: 'no-repeat' }}>
        <div className='d-flex flex-column justify-content-between p-4  rounded-3 text-light bg-white bg-opacity-25' style={{ width: '20rem', minHeight: '25rem', outline: "none", boxShadow: '0px 0px 5px 3px #f0ffff' }}>
          <Heading1 value={'Login'} />
          <FloatingInput type={'text'} label={'Username'} onChange={(e) => setlogin((prev) => ({ ...prev, username: e.target.value }))} />
          <FloatingInput type={'password'} label={'Password'} onChange={(e) => setlogin((prev) => ({ ...prev, password: e.target.value }))} />
          <Button value={'Login'} onClick={handleSubmit} />
          <p className='fs-6'>Don't have an account?<Link to="/register"><span className='fw-bold text-decoration-none'> Register Now</span></Link></p>
        </div>
      </div>
    </>
  );
}

export default LoginPage;