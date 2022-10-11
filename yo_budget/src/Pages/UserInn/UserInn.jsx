import React from 'react';
import "./UserInn.css"

function UserInn() {

  const showBox = (el) => {
    let registerIcon = document.querySelector(".user-signin");
    let register = document.querySelector("#register");
    let loginIcon = document.querySelector(".user-login");
    let login = document.querySelector("#login");
    if (el === "r") {
      if (loginIcon.style.display !== "none") {
        login.style.display = "block";
        loginIcon.style.display = "none";
      }
      register.style.display = "none"
      registerIcon.style.display = "flex";
    } else {
      if (registerIcon.style.display !== "none") {
        register.style.display = "block";
        registerIcon.style.display = "none";
      }
      login.style.display = "none"
      loginIcon.style.display = "flex";
    }
  }

  return (
    <div className='userinn'>
      <div id='register'>
        <i className="fa-solid fa-user-plus userinn-icon register" onClick={() => showBox("r")}></i>
      </div>
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
            <input type="text" placeholder='Name' />
          </div>
          <div className="form-ctr">
            <i className="fa-solid fa-user"></i>
            <input type="text" placeholder='Lastname' />
          </div>
          <div className="form-ctr">
            <i className="fa-solid fa-envelope"></i>
            <input type="email" placeholder='Email' />
          </div>
          <div className="form-ctr">
            <i className="fa-solid fa-lock"></i>
            <input type="password" placeholder='Password' />
          </div>
          <div className="form-ctr">
            <i className="fa-solid fa-lock"></i>
            <input type="password" placeholder='Confirm Password' />
          </div>
          <div className="form-ctr">
            <i className="fa-solid fa-image"></i>
            <input type="text" placeholder='image' />
          </div>
          <div className="form-ctr">
            <input className='btn-register' type="submit" value="Register" />
          </div>
        </form>
      </div>
      <div id='login'>
        <i className="fa-solid fa-user-check userinn-icon login" onClick={showBox}></i>
      </div>
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
            <input type="email" placeholder='Email' />
          </div>
          <div className="form-ctr">
            <i className="fa-solid fa-lock"></i>
            <input type="password" placeholder='Password' />
          </div>
          <div className="form-ctr">
            <input className='btn-login' type="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserInn