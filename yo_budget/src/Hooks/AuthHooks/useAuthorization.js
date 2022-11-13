import { useState } from "react"
import { checkToken } from "../../Services/User/getUsers";

export const useAuthorization = () => {

  const [userLogged, setUserLogged] = useState(null);

  const userIsLogged = async () => {
    // Check if there is a token in local storage
    const tokenInStorage = localStorage.getItem("token");
    // If it is
    if (tokenInStorage) {
      // Check if it is valid token
      const data = await checkToken();
      (data.token) ? setUserLogged(data.token) : localStorage.clear();
    } else {
      setUserLogged(null);
    }
  }

  return {
    userLogged,
    userIsLogged,
  }
}
