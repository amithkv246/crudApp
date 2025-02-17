import React, { useEffect, useState } from 'react';
import FloatingInput from '../components/floatingInput';
import Button from '../components/button';
import Heading1 from '../components/heading1';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateIsLoggedIn } from '../redux/slice';
import { loginAPI } from '../APIServices/allAPI\'s/registerAPI';

function LoginPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: ""
  });
  const [validationReminder, setValidationReminder] = useState([])

  const handleLoginEmail = (e) => {
    const email = e.target.value
    const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    setLoginCredentials((prev) => ({ ...prev, email: email }))
    if (email !== "") {
      if (!(emailRegExp.test(email))) {
        setValidationReminder((prev) => {
          const newArray = [...prev]
          newArray[0] = "Enter a valid email id."
          return newArray
        })
      } else {
        setValidationReminder((prev) => {
          const newArray = [...prev]
          newArray[0] = ""
          return newArray
        })
      }
    } else {
      setValidationReminder((prev) => {
        const newArray = [...prev]
        newArray[0] = ""
        return newArray
      })
    }
  }

  const handleLoginPassword = (e) => {
    const pass = e.target.value
    const passRegExp = /^.{8,}$/
    setLoginCredentials((prev) => ({ ...prev, password: pass }))
    if (pass !== "") {
      if (!(passRegExp.test(pass))) {
        setValidationReminder((prev) => {
          const newArray = [...prev]
          newArray[1] = "Password must contain atleast 8 characters."
          return newArray
        })
      } else {
        setValidationReminder((prev) => {
          const newArray = [...prev]
          newArray[1] = ""
          return newArray
        })
      }
    } else {
      setValidationReminder((prev) => {
        const newArray = [...prev]
        newArray[1] = ""
        return newArray
      })
    }
  }

  const handleLogin = (token) => {
    sessionStorage.setItem('token', JSON.stringify(token))
    localStorage.setItem('userCredentials', JSON.stringify(loginCredentials))
    dispatch(updateIsLoggedIn(true))
    navigate("/home")
  }

  const handleLoginAPI = async () => {
    if (Object.values(loginCredentials).some(values => values === "")) {
      alert("!Please fill in the required fields.")
    } else if (validationReminder.some(values => values !== "")) {
      alert("!Please enter valid credentials.")
    } else {
      const data = { email: loginCredentials.email, password: loginCredentials.password };
      try {
        const result = await loginAPI(data)
        const token = result.data.token
        if (result.status === 200) {
          alert("Login Successful")
          handleLogin(token)
          setLoginCredentials((prev) => ({ ...prev, email: "", password: "" }))
        } else if (result.status === 406) {
          alert("Invalid Email Id or Password")
          setLoginCredentials((prev) => ({ ...prev, email: "", password: "" }))
        } else if (result.status === 500) {
          alert("An error occured in the server. Check the console for further details.")
          setLoginCredentials((prev) => ({ ...prev, email: "", password: "" }))
          console.log(result);
        }
      } catch (error) {
        return error
      }
    }
  }

  // const handleLogout = () => {
  //     localStorage.removeItem('userCredentials');
  //     dispatch(updateIsLoggedIn(false)); // Update Redux state
  //     navigate("/");
  // };

  return (
    <>
      <div className='d-flex flex-row justify-content-center align-items-center' style={{ height: '100svh', backgroundImage: "url('./loginbg/carcolor.png')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <div className='d-flex flex-column justify-content-between p-4 rounded-3 text-white bg-secondary bg-opacity-50' style={{ width: '20rem', minHeight: '25rem', outline: "none", boxShadow: '0px 0px 5px 3px #FFFFFF' }}>
          <Heading1 value={'Login'} />
          <FloatingInput validation={validationReminder[0]} type={'email'} label={'Email'} name={'email'} value={loginCredentials.email} onChange={(e) => handleLoginEmail(e)} />
          <FloatingInput validation={validationReminder[1]} type={'password'} label={'Password'} name={'password'} value={loginCredentials.password} onChange={(e) => handleLoginPassword(e)} />
          <Button value={'Login'} onClick={handleLoginAPI} />
          <p className='text-center fs-6'>Don't have an account? <Link className='fw-bold text-decoration-none text-white' to="/register">Register Now</Link></p>
        </div>
      </div>
    </>
  );
}

export default LoginPage;