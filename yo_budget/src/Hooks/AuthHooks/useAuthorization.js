import { useState } from "react"
import { checkToken } from "../../Common/User/checkToken";

export const useAuthorization = () => {

  const [userLogged, setUserLogged] = useState(null);

  const userIsLogged = async () => {
    const token = localStorage.getItem("token");
    const tokenInStorage = await checkToken(token);
    (tokenInStorage) ? setUserLogged(tokenInStorage) : localStorage.clear();
  }

  return {
    userLogged,
    userIsLogged,
  }
}
