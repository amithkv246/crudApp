import React from 'react';
import FloatingInput from '../components/floatingInput';
import Button from '../components/button';
import Heading1 from '../components/heading1';

function LoginPage() {
  return (
    <>
      <div className='d-flex flex-row justify-content-center align-items-center text-light' style={{ height: '100svh', backgroundImage: "url('./loginbg/carcolor.png')", backgroundSize: '100svw auto', backgroundRepeat: 'no-repeat' }}>
        <div className='d-flex flex-column justify-content-center align-items-center gap-4 p-3 border border-2 border-light rounded-3 bg-white bg-opacity-25' style={{ width: '20rem', minHeight: '25rem', boxShadow: '0px 0px 5px 3px #ccc' }}>
          <Heading1 value={'Login'} />
          <FloatingInput type={'text'} label={'Username'} placeholder={'Username'} />
          <FloatingInput type={'password'} label={'Password'} placeholder={'Password'} />
          <Button value={'Login'} />
          <p className='fs-6'>Don't have an account?<span className='fw-bold'>Register now</span></p>
        </div>
      </div>
    </>
  );
}

export default LoginPage;