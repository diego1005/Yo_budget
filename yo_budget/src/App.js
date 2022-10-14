import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home/Home";

function App() {

  return (
    <div >
      <Routes>
        <Route path="/" exact element={< Home />} />
        <Route path="/userinn" exact element={<Home content="userinn" />} />
        <Route path="/operations" exact element={<Home content="table" />} />
        <Route path="/profile" exact element={<Home content="profile" />} />
      </Routes>
    </div>
  );
}

export default App;
