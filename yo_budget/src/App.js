import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home/Home";

function App() {

  return (
    <div >
      <Routes>
        <Route path="/" exact element={< Home />} />
        <Route path="/userInn" exact element={<Home content="userinn" />} />
      </Routes>
    </div>
  );
}

export default App;
