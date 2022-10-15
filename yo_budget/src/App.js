import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home/Home";
import AuthVerify from "./Common/AuthVerify";

function App() {

  const [userLogged, setUserLogged] = useState(null);

  return (
    <div >
      <Routes>
        <Route path="/" exact element={< Home user={userLogged} />} />
        <Route path="/userinn"
          exact
          element={
            (userLogged !== null) 
            ? <Navigate replace to="/profile" />
            : <Home user={userLogged} set={setUserLogged} content="userinn" />
          } />
        <Route path="/operations" exact element={<Home user={userLogged} content="table" />} />
        <Route path="/profile" exact element={<Home user={userLogged} content="profile" />} />
      </Routes>
      <AuthVerify user={userLogged} set={setUserLogged} />
    </div>
  );
}

export default App;
