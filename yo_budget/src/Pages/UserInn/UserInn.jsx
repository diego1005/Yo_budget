import React, { useState, useRef } from 'react';
import { RegisterBox, LoginBox } from '../../Components/UserInn';
import { useHandleView } from '../../Hooks/ViewHooks/useHandleView';
import "./UserInn.css";

function UserInn() {

  //States of login and signin data
  const [userLoginData, setUserLoginData] = useState({ username: '', password: '' });
  const [userRegisterData, setUserRegisterData] = useState({ name: '', lastname: '', email: '', password: '', confirmPassword: '' });

  //States of register and login divs and buttons to show
  const [registerBox, setRegisterBox] = useState(false)
  const [registerBtn, setRegisterBtn] = useState(true)
  const [loginBox, setLoginBox] = useState(false)
  const [loginBtn, setLoginBtn] = useState(true)

  const { handleView } = useHandleView();

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
        handleView("dashboard");
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
        handleView("dashboard");
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
        <RegisterBox />
      }
      {
        loginBtn &&
        <div>
          <i className="fa-solid fa-user-check userinn-icon login" onClick={showHideLog}></i>
        </div>
      }
      {
        loginBox &&
        <LoginBox />
      }
    </div>
  )
}

export default UserInn