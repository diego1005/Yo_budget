import { useContext } from "react"
import { displayView } from "../../Common/Views/displayView";
import { AppContext, HomeContext } from "../../Context/context"

export const useHandleView = () => {

    const { userLogged } = useContext(AppContext);
    const { changeView } = useContext(HomeContext);

    const handleView = (view) => {
        changeView(displayView(userLogged, view));
    }

    return {
        handleView,
    }
}
