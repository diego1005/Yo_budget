import { useContext } from "react"
import { displayView } from "../../Common/Views/displayView";
import { AppContext, HomeContext } from "../../Context/context"

export const useHandleView = () => {

    const { userLogged, userIsLogged } = useContext(AppContext);
    const { setView } = useContext(HomeContext);

    const handleView = (view) => {
        if (!userLogged) {
            userIsLogged()
        } else {
            view = (view === "LOG IN" || view === "SIGN IN") ? "userinn" : view;
            setView(displayView(userLogged, view));
        }
    }

    return {
        handleView,
    }
}
