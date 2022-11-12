import React from 'react';
import { RegisterBox, LoginBox } from '../../Components/UserInn';
import { UserContext } from '../../Context/context';
import { useInputHandler } from '../../Hooks/FormHooks/useInputHandler';
import { useHideShow } from '../../Hooks/UserInnHooks/useHideShow';
import { useSubmitHandler } from '../../Hooks/UserInnHooks/useSubmitHandler';
import "./UserInn.css";

function UserInn() {

  //States of login and signin data
  const { login, register, showHideLog, showHideReg } = useHideShow();
  const { submitHandler } = useSubmitHandler();
  const { inputData, inputHandler } = useInputHandler();

  return (
    <UserContext.Provider value={{ submitHandler, inputData, inputHandler }}>
      <div className='userinn'>
        {
          !register
            ? <div>
              <i className="fa-solid fa-user-plus userinn-icon register" onClick={showHideReg}></i>
            </div>
            : <><RegisterBox /></>
        }
        {
          !login
            ? <div>
              <i className="fa-solid fa-user-check userinn-icon login" onClick={showHideLog}></i>
            </div>
            : <><LoginBox /></>
        }
      </div>
    </UserContext.Provider>
  )
}

export default UserInn