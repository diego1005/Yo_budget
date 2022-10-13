import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// import { Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home/Home";

function App() {

  const [userLogged, setUserLogged] = useState(null);

  useEffect(() => {
    console.log('%cSe monto el componente', 'color: green');
    fetch("http://localhost:3001/user/checkToken")
      .then(response => response.json())
      .then(data => {
        if (data.action !== "redirect") {
          setUserLogged(data.token)
        } else {
          window.localStorage.clear();
        }
      })
      .catch(err => console.error(err))
  }, [])

  console.log(userLogged);

  return (
    <div >
      {
        userLogged === null
          ? (<Home content="userinn" />)
          : (<Home />)
      }

      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>

      {/*       
      <Routes>
        <Route path="/" exact element={(userLogged !== undefined) ? <Home /> : <Navigate replace to="/userinn" />} />
        <Route path="/userinn" exact element={<Home content="userinn" />} />
      </Routes> */}
    </div>
  );
}

export default App;
