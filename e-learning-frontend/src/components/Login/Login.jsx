import React, { useState } from 'react'
import './Login.css'
import Head from '../common/heading/Head.jsx'

function Login() {
  const [isRegClicked, setIsRegClicked] = useState(false); 

  const handleRegButtonClick = () => {
    setIsRegClicked(true)
  }
  const handleLoginButtonClick = () => {
    setIsRegClicked(false)
  }

  return (
    <>

      <div className="wrapper">
        <div className="loginBox">
          <div className="login-reg">
            <div className="loginDiv">
              {/* <h5><button className={isRegClicked? '' : 'defaultUnderline'} onClick={handleLoginButtonClick}>LOGIN</button></h5> */}
            </div>
            <div className="hr"></div>
            <div className="regDiv">
              {/* <h5><button className={isRegClicked ? 'underline buttonLoginReg' : 'buttonLoginReg'} onClick={handleRegButtonClick} >REGISTER</button></h5> */}
            </div>
          </div>
          <hr />
          {/* <label htmlFor="">Email</label> */}
          <input placeholder='Email' />
          {/* <label htmlFor="">Password</label> */}
          <input placeholder='Password' />
          <button className='btn col-6 buttonLoginReg' >
            Login
          </button>
        </div>
      </div>
    </>
  )
}

export default Login