import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home/Home";
import AuthVerify from "./Common/AuthVerify";

function App() {

  const [userLogged, setUserLogged] = useState(null);
  const [count, setCount] = useState(0);

  return (
    <div >
      <Routes>
        <Route path="/" exact element={< Home user={userLogged} />} />
        <Route path="/userinn"
          exact
          element={
            (userLogged !== null)
              ? <Navigate replace to="/profile" />
              : <Home set={setUserLogged} content="userinn" count={setCount} />
          } />
        <Route path="/operations" exact element={<Home user={userLogged} content="table" />} />
        <Route path="/profile" exact element={<Home user={userLogged} content="profile" />} />
      </Routes>
      <AuthVerify user={userLogged} set={setUserLogged} count={count} />
    </div>
  );
}

export default App;
