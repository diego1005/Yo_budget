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

    const checkToken = (user, set) => {
        fetch("http://localhost:3001/user/checkToken", {
            headers: { "authorization": user }
        })
            .then(response => response.json())
            .then(data => {
                if (data.action !== "redirect") {
                    //Token doesn't expired yet
                    console.log('%cToken not expired', 'color: yellow')
                    set(data.token);
                    return true
                } else {
                    //Token expired
                    console.log('%cToken expired', 'color: red')
                    localStorage.clear();
                    return true;
                }
            })
            .catch(err => console.error(err))
    }
}

export default AuthVerify;