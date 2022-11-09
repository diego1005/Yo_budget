import React from "react";
import './App.css';
import Home from "./Pages/Home/Home";
// import AuthVerify from "./Common/User/AuthVerify";
import { AppContext } from "./Context/context";
import { useAuthorization } from "./Hooks/AuthHooks/useAuthorization";

function App() {

  const { userLogged, userIsLogged } = useAuthorization()

  // const [userLogged, setUserLogged] = useState(null);
  // const [count, setCount] = useState(0);

  return (
    <div >
      <AppContext.Provider value={{ userLogged, userIsLogged }}>
        <Home />
      </AppContext.Provider>
      {/* <Routes>
          <Route path="/" exact element={< Home />} />
          <Route path="/userinn"
            exact
            element={
              (userLogged !== null)
                ? <Navigate replace to="/profile" />
                : <Home set={setUserLogged} content="userinn" count={setCount} />
            } />
          <Route path="/operations" exact element={<Home user={userLogged} content="table" />} />
          <Route path="/profile" exact element={<Home user={userLogged} content="profile" />} />
      </Routes> */}
      {/* <AuthVerify user={userLogged} set={setUserLogged} count={count} /> */}
    </div >
  );
}

export default App;
