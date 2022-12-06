import React from "react";
import './App.css';
import Home from "./Pages/Home/Home";
import { AppContext } from "./Context/context";
import { useAuthorization } from "./Hooks/AuthHooks/useAuthorization";

function App() {

  const { userLogged, userIsLogged } = useAuthorization()

  return (
    <div >
      <AppContext.Provider value={{ userLogged, userIsLogged }}>
        <Home />
      </AppContext.Provider>
    </div >
  );
}

export default App;
