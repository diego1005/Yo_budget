import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import UserInn from "../../Pages/UserInn/UserInn";

function AuthVerify(props) {

    console.log('%cAuth verification', 'color: blue')
    //Listen every route change
    let location = useLocation();

    useEffect(() => {
        checkToken(props.user, props.set);
        const tokenInStorage = localStorage.getItem("token");
        if (!tokenInStorage) props.set(null);
    }, [location, props])

    useEffect(() => {
        if (props.user === null && props.count > 0) {
            alert("Session expired !!");
            < UserInn msg="expired" />
        }
    }, [props.user, props.count])


}

export default AuthVerify;