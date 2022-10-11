import React from 'react';
import "./UserInn.css"

function UserInn() {
  return (
    <div className='userinn'>
      <div className="user-signin">
        <i class="fa-solid fa-user-plus userinn-icon register"></i>
        <div className="userinn-title-box">
          <hr />
          <h3 className='inn-title'>Register</h3>
          <hr />
        </div>
        <form className='signin-form'>
          <div>
            <input type="text" placeholder='Name' />
          </div>
          <div>
            <input type="text" placeholder='Lastname' />
          </div>
          <div>
            <input type="email" placeholder='Email' />
          </div>
          <div>
            <input type="password" placeholder='Password' />
          </div>
          <div>
            <input type="password" placeholder='Confirm Password' />
          </div>
          <div>
            <input type="text" placeholder='image' />
          </div>
          <div>
            <input className='btn-register' type="submit" value="Register" />
          </div>
        </form>
      </div>
      <div className="user-login">
        <i class="fa-solid fa-user-check userinn-icon login"></i>
        <div className="userinn-title-box">
          <hr />
          <h3 className='inn-title'>Login</h3>
          <hr />
        </div>
        <form className='login-form'>
          <div>
            <input type="email" placeholder='Email' />
          </div>
          <div>
            <input type="password" placeholder='Password' />
          </div>
          <div>
            <input className='btn-login' type="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserInn