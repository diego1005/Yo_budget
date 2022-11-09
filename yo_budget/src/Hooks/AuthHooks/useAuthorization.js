import { useState } from "react"
import { checkToken } from "../../Common/User/checkToken";

export const useAuthorization = () => {

  const [userLogged, setUserLogged] = useState(null);

  const userIsLogged = () => {
    const token = localStorage.getItem("token");
    const tokenInStorage = checkToken(token);
    setUserLogged(tokenInStorage);
  } 

  return {
    userLogged,
    userIsLogged,
  }
}
