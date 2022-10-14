import React, { useState, useRef } from 'react';
import "./UserInn.css";
import { useNavigate } from 'react-router-dom';

function UserInn(props) {

  //States of login and signin data
  const [userLoginData, setUserLoginData] = useState({ username: '', password: '' });
  const [userRegisterData, setUserRegisterData] = useState({ name: '', lastname: '', email: '', password: '', confirmPassword: '' });
  //Captured input of file
  const file = useRef();
  //States of register and login divs and buttons to show
  const [registerBox, setRegisterBox] = useState(false)
  const [registerBtn, setRegisterBtn] = useState(true)
  const [loginBox, setLoginBox] = useState(false)
  const [loginBtn, setLoginBtn] = useState(true)

  //To show or hide Register div and button
  const showHideReg = () => {
    setRegisterBox((prevState) => !prevState);
    setRegisterBtn((prevState) => !prevState);
    if (loginBox) {
      setLoginBox((prevState) => !prevState)
      setLoginBtn((prevState) => !prevState);
    }
  }
  //To show or hide Login div and button
  const showHideLog = () => {
    setLoginBox((prevState) => !prevState);
    setLoginBtn((prevState) => !prevState);
    if (registerBox) {
      setRegisterBox((prevState) => !prevState)
      setRegisterBtn((prevState) => !prevState);
    }
  }
  //Fn for handle submit form action
  const submitHandler = (e) => {
    //Prevent default behaviour
    e.preventDefault();

    const process = e.target.getAttribute('name')
    if (process === "register") sendReg(userRegisterData);
    if (process === "login") sendLog(userLoginData);

  }
  //Fn to signin and login -------------------------------

  const navigate = useNavigate();

  const sendReg = (data) => {
    const url = "http://localhost:3001/user/signin";
    let formData = null;
    formData = new FormData();
    formData.append("url_img", file.current.files[0])
    for (let key in data) {
      formData.append(key, data[key])
    }
    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        localStorage.setItem("token", data.token);
        props.user(data.token);
        return navigate("/");
      })
      .catch(err => console.error("error on signin fetch: ", err))
  }

  const sendLog = (data) => {
    const url = "http://localhost:3001/user/login";
    fetch(url, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        localStorage.setItem("token", data.token);
        props.user(data.token);
        return navigate("/");
      })
      .catch(err => console.error("error on login fetch: ", err))
  }
  //------------------------------------------------------

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
          <form className='signin-form' name='register' onSubmit={submitHandler}>
            <div className="form-ctr">
              <i className="fa-solid fa-user"></i>
              <input type="text" name='name' placeholder='Name' onChange={e => setUserRegisterData({ ...userRegisterData, name: e.target.value })} value={userRegisterData.name} />
            </div>
            <div className="form-ctr">
              <i className="fa-solid fa-user"></i>
              <input type="text" name='lastname' placeholder='Lastname' onChange={e => setUserRegisterData({ ...userRegisterData, lastname: e.target.value })} value={userRegisterData.lastname} />
            </div>
            <div className="form-ctr">
              <i className="fa-solid fa-envelope"></i>
              <input type="email" name='email' placeholder='Email' onChange={e => setUserRegisterData({ ...userRegisterData, email: e.target.value })} value={userRegisterData.email} />
            </div>
            <div className="form-ctr">
              <i className="fa-solid fa-lock"></i>
              <input type="password" name='password' placeholder='Password' onChange={e => setUserRegisterData({ ...userRegisterData, password: e.target.value })} value={userRegisterData.password} />
            </div>
            <div className="form-ctr">
              <i className="fa-solid fa-lock"></i>
              <input type="password" name='confirmPassword' placeholder='Confirm Password' onChange={e => setUserRegisterData({ ...userRegisterData, confirmPassword: e.target.value })} value={userRegisterData.confirmPassword} />
            </div>
            <div className="form-ctr">
              <i className="fa-solid fa-image"></i>
              <input type="file" name='file' ref={file} />
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
        <div className="user-login" >
          <i className="fa-solid fa-user-check userinn-icon login"></i>
          <div className="userinn-title-box">
            <hr />
            <h3 className='inn-title'>Login</h3>
            <hr />
          </div>
          <form className='login-form' name='login' onSubmit={submitHandler}>
            <div className="form-ctr">
              <i className="fa-solid fa-envelope"></i>
              <input type="email" name='username' placeholder='Email' onChange={e => setUserLoginData({ ...userLoginData, username: e.target.value })} value={userLoginData.username} />
            </div>
            <div className="form-ctr">
              <i className="fa-solid fa-lock"></i>
              <input type="password" name='password' placeholder='Password' onChange={e => setUserLoginData({ ...userLoginData, password: e.target.value })} value={userLoginData.password} />
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