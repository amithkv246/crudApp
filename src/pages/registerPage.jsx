import React, { useEffect, useState } from 'react';
import Heading1 from '../components/heading1';
import FloatingInput from '../components/floatingInput';
import Button from '../components/button';
import { Link } from 'react-router-dom';
import { registerAPI } from '../APIServices/allAPIs';

function RegisterPage() {

  const [regCredentials, setRegCredentials] = useState({
    regName: "",
    regEmail: "",
    regPass: "",
    regConPass: ""
  })
  const [validationReminder, setValidationReminder] = useState([])

  const handleRegisterName = (e) => {
    const name = e.target.value
    const nameRegExp = /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/
    setRegCredentials((prev) => ({ ...prev, regName: name }))
    if (name !== "") {
      if (!(nameRegExp.test(name))) {
        setValidationReminder((prev) => {
          const newArray = [...prev]
          newArray[0] = "First letter must be uppercase."
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

  const handleRegisterEmail = (e) => {
    const email = e.target.value
    const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    setRegCredentials((prev) => ({ ...prev, regEmail: email }))
    if (email !== "") {
      if (!(emailRegExp.test(email))) {
        setValidationReminder((prev) => {
          const newArray = [...prev]
          newArray[1] = "Enter a valid email id."
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

  const handleRegisterPassword = (e) => {
    const pass = e.target.value
    const passRegExp = /^.{8,}$/
    setRegCredentials((prev) => ({ ...prev, regPass: pass }))
    if (pass !== "") {
      if (!(passRegExp.test(pass))) {
        setValidationReminder((prev) => {
          const newArray = [...prev]
          newArray[2] = "Password must contain atleast 8 characters."
          return newArray
        })
      } else {
        setValidationReminder((prev) => {
          const newArray = [...prev]
          newArray[2] = ""
          return newArray
        })
      }
    } else {
      setValidationReminder((prev) => {
        const newArray = [...prev]
        newArray[2] = ""
        return newArray
      })
    }
  }

  const handleRegisterConPass = (e) => {
    const conPass = e.target.value
    const conPassRegExp = /^.{8,}$/
    setRegCredentials((prev) => ({ ...prev, regConPass: conPass }))
    if (conPass !== "") {
      if (!(conPassRegExp.test(conPass))) {
        setValidationReminder((prev) => {
          const newArray = [...prev]
          newArray[3] = "Password must contain atleast 8 characters11."
          return newArray
        })
      } else {
        setValidationReminder((prev) => {
          const newArray = [...prev]
          newArray[3] = ""
          return newArray
        })
      }
    } else {
      setValidationReminder((prev) => {
        const newArray = [...prev]
        newArray[3] = ""
        return newArray
      })
    }
  }

  const handleRegisterAPI = async () => {
    if (Object.values(regCredentials).some(values => values === "")) {
      alert("!Please fill in the required fields.")
    } else if (validationReminder.some(values => values !== "")) {
      alert("!Please enter valid credentials.")
    } else if (regCredentials.regPass !== regCredentials.regConPass) {
      alert("!Password and confirm password do not match. Please try again.")
    } else {
      const data = { name: regCredentials.regName, email: regCredentials.regEmail, password: regCredentials.regPass };
      try {
        const result = await registerAPI(data)
        if (result.status === 200) {
          alert("Registered Successfully")
          setRegCredentials((prev) => ({ ...prev, regName: "", regEmail: "", regPass: "", regConPass: "" }))
        } else if (result.status === 406) {
          alert("Account already exists. Please login")
          setRegCredentials((prev) => ({ ...prev, regName: "", regEmail: "", regPass: "", regConPass: "" }))
        } else if (result.status === 500) {
          alert("An error occured in the server. Check the console for further details.")
          setRegCredentials((prev) => ({ ...prev, regName: "", regEmail: "", regPass: "", regConPass: "" }))
          console.log(result);
        }
      } catch (error) {
        return error
      }
    }
  }

  return (
    <>
      <div className='d-flex flex-row justify-content-center align-items-center' style={{ height: '100svh', backgroundImage: "url('./loginbg/carcolor.png')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <div className='d-flex flex-column gap-4 p-4 rounded-3 text-white bg-secondary bg-opacity-50' style={{ width: '20rem', minHeight: '25rem', outline: "none", boxShadow: '0px 0px 5px 3px #FFFFFF' }}>
          <Heading1 value={'Register'} />
          <FloatingInput validation={validationReminder[0]} type={'text'} label={'Name'} name={'name'} value={regCredentials.regName} onChange={(e) => handleRegisterName(e)} />
          <FloatingInput validation={validationReminder[1]} type={'email'} label={'Email'} name={'email'} value={regCredentials.regEmail} onChange={(e) => handleRegisterEmail(e)} />
          <FloatingInput validation={validationReminder[2]} type={'password'} label={'Password'} name={'password'} value={regCredentials.regPass} onChange={(e) => handleRegisterPassword(e)} />
          <FloatingInput validation={validationReminder[3]} type={'password'} label={'Confirm Password'} name={'confirm_password'} value={regCredentials.regConPass} onChange={(e) => handleRegisterConPass(e)} />
          <Button value={'Register'} onClick={handleRegisterAPI} />
          <p className='text-center fs-6'>Already have an account? <Link className='fw-bold text-decoration-none text-white' to="/">Login</Link></p>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;