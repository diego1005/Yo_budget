import { useContext } from "react";
import { AppContext } from "../../Context/context";
import { logoutUser } from "../../Services/User/getUsers";

export const useLogout = () => {

    const { userIsLogged } = useContext(AppContext);

    const logout = async () => {
        const status = await logoutUser();
        if (status === "success") {
            localStorage.clear();
            userIsLogged();
        }
    }

    return {
        logout,
    }
}
