import React, { useEffect, useContext } from 'react';
import { AppContext } from '../../Context/context';
// import { Navigate } from 'react-router-dom';
import "./Home.css";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Main from "../../Components/Main/Main";
import Profile from '../Profile/Profile';
import Footer from "../../Components/Footer/Footer";
import UserInn from '../UserInn/UserInn';
import Secondary from '../../Components/Main/Secondary/Secondary';

function Home() {

    const [view, setView] = useState('');
    const { userLogged, isUserLogged } = useContext(UserContext);

    useEffect(() => {
        console.log('%cComponent Home is mount', 'color: green');
        isUserLogged();
    }, [])

    const switchComponent = () => {
        switch (view) {
            case "table":
                return <Secondary />
            case "profile":
                return <Profile />;
            case "userinn":
                return <UserInn />;
            default:
                return <Main />;
        }
    }

    return (
        <AppContext.Provider value={setView}>
            <div className={(content === undefined) ? "home" : "home home-vh"}>
                <Sidebar />
                <div className="container">
                    <Header />
                    {
                        (userLogged === null)
                            ? <UserInn />
                            : { switchComponent }
                    }
                    <Footer />
                </div>
            </div>
        </AppContext.Provider>
        // (user === null && content !== "userinn")
        //     ? <Navigate replace to="/userinn" />
        //     : <div className={(content === undefined) ? "home" : "home home-vh"}>
        //         <Sidebar />
        //         <div className="container">
        //             <Header />
        //             {
        //                 switchComponent(content)
        //             }
        //             <Footer />
        //         </div>
        //     </div>
    )
}

export default Home