import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home/Home";

function App() {

  const [userLogged, setUserLogged] = useState();

  useEffect(() => {
    console.log('%cSe monto el componente', 'color: green');
    fetch("http://localhost:3001/user")
      .then(response => response.json())
      .then(data => {
        if (data.action !== "redirect") {
          setUserLogged(data.token)
        }
      })
      .catch(err => console.error("error: ", err));
  }, [])

  return (
    <div >
      <Routes>
        <Route path="/" exact element={userLogged ? <Home /> : <Navigate replace to="/userinn" />} />
        <Route path="/userinn" exact element={<Home content="userinn" />} />
      </Routes>
    </div>
  );
}

export default App;
