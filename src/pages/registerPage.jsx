import React from 'react';
import Heading1 from '../components/heading1';
import FloatingInput from '../components/floatingInput';
import Button from '../components/button';
import { Link } from 'react-router-dom';

function RegisterPage() {
  return (
    <>
      <div className='d-flex flex-row justify-content-center align-items-center' style={{ height: '100svh', backgroundImage: "url('./loginbg/carcolor.png')", backgroundSize: '100svw auto', backgroundRepeat: 'no-repeat' }}>
        <div className='d-flex flex-column justify-content-between p-4 rounded-3 text-light bg-white bg-opacity-25' style={{ width: '20rem', minHeight: '25rem', outline: "none", boxShadow: '0px 0px 5px 3px #f0ffff' }}>
          <Heading1 value={'Register'} />
          <FloatingInput type={'text'} label={'Username'} />
          <FloatingInput type={'password'} label={'Password'} />
          <FloatingInput type={'password'} label={'Confirm Password'} />
          <Button value={'Register'} />
          <p className='fs-6'>Already have an account?<span className='fw-bold'> <Link to="/">Login</Link></span></p>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;