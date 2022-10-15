import React from 'react';
import { useEffect } from 'react';
import "./Profile.css";

function Profile() {

  useEffect(() => {
    console.log('%cComponent Profile is mount', 'color: green');
  })

  return (
    <div>Profile</div>
  )
}

export default Profile