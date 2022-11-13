import { useEffect } from 'react';
import { useLogout } from '../../Hooks/UserInnHooks/useLogout';
import "./Profile.css";

function Profile() {

  const { logout } = useLogout();

  useEffect(() => {
    console.log('%cComponent Profile is mount', 'color: green');
  })

  return (
    <div>
      <button onClick={logout}>Log out</button>
    </div>
  )
}

export default Profile