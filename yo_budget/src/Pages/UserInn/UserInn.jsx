import React, { useState } from 'react';
import "./UserInn.css";

function UserInn() {

  const [registerBox, setRegisterBox] = useState(false)
  const [registerBtn, setRegisterBtn] = useState(true)
  const [loginBox, setLoginBox] = useState(false)
  const [loginBtn, setLoginBtn] = useState(true)

  const showHideReg = () => {
    setRegisterBox((prevState) => !prevState);
    setRegisterBtn((prevState) => !prevState);
    if (loginBox) {
      setLoginBox((prevState) => !prevState)
      setLoginBtn((prevState) => !prevState);
    }
  }
  
  const showHideLog = () => {
    setLoginBox((prevState) => !prevState);
    setLoginBtn((prevState) => !prevState);
    if (registerBox) {
      setRegisterBox((prevState) => !prevState)
      setRegisterBtn((prevState) => !prevState);
    }
  }

  return (
    <div className='userinn'>
      {
        registerBtn &&
        <div>
          <i className="fa-solid fa-user-plus userinn-icon register" onClick={showHideReg}></i>
        </div>
      }
      {
        registerBox &&
        <div className="user-signin">
          <i className="fa-solid fa-user-plus userinn-icon register"></i>
          <div className="userinn-title-box">
            <hr />
            <h3 className='inn-title'>Register</h3>
            <hr />
          </div>
          <form className='signin-form'>
            <div className="form-ctr">
              <i className="fa-solid fa-user"></i>
              <input type="text" name='name' placeholder='Name' />
            </div>
            <div className="form-ctr">
              <i className="fa-solid fa-user"></i>
              <input type="text" name='lastname' placeholder='Lastname' />
            </div>
            <div className="form-ctr">
              <i className="fa-solid fa-envelope"></i>
              <input type="email" name='email' placeholder='Email' />
            </div>
            <div className="form-ctr">
              <i className="fa-solid fa-lock"></i>
              <input type="password" name='password' placeholder='Password' />
            </div>
            <div className="form-ctr">
              <i className="fa-solid fa-lock"></i>
              <input type="password" name='confirmPassword' placeholder='Confirm Password' />
            </div>
            <div className="form-ctr">
              <i className="fa-solid fa-image"></i>
              <input type="text" name='file' placeholder='image' />
            </div>
            <div className="form-ctr">
              <input className='btn-register' type="submit" value="Register" />
            </div>
          </form>
        </div>
      }
      {
        loginBtn &&
        <div>
          <i className="fa-solid fa-user-check userinn-icon login" onClick={showHideLog}></i>
        </div>
      }
      {
        loginBox &&
        <div className="user-login">
          <i className="fa-solid fa-user-check userinn-icon login"></i>
          <div className="userinn-title-box">
            <hr />
            <h3 className='inn-title'>Login</h3>
            <hr />
          </div>
          <form className='login-form'>
            <div className="form-ctr">
              <i className="fa-solid fa-envelope"></i>
              <input type="email" name='email' placeholder='Email' />
            </div>
            <div className="form-ctr">
              <i className="fa-solid fa-lock"></i>
              <input type="password" name='password' placeholder='Password' />
            </div>
            <div className="form-ctr">
              <input className='btn-login' type="submit" value="Login" />
            </div>
          </form>
        </div>
      }
    </div>
  )
}

export default UserInn