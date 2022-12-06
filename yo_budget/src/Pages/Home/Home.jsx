import React, { useState, useEffect, useContext } from 'react';
import { AppContext, HomeContext } from '../../Context/context';
import "./Home.css";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Main from "../../Components/Main/Main";
import Profile from '../Profile/Profile';
import Footer from "../../Components/Footer/Footer";
import UserInn from '../UserInn/UserInn';
import Secondary from '../../Components/Main/Secondary/Secondary';
import { homeCssRule } from '../../Common/Views/homeCssRule';

function Home() {

    const [view, setView] = useState();
    const { userLogged, userIsLogged } = useContext(AppContext);

    useEffect(() => {
        console.log('%cComponent Home is mount', 'color: green');
        userIsLogged();
        switchComponent();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [view])

    let components = {
        "operations": <Secondary />,
        "profile": <Profile />,
        "userinn": <UserInn />,
        "log in": <UserInn />,
        "sign in": <UserInn />,
    }

    const switchComponent = () => {
        return components[view] ? components[view] : <Main />;
    }

    return (
        <HomeContext.Provider value={{ setView }}>
            <div className={homeCssRule(userLogged, view)}>
                <Sidebar />
                <div className="container">
                    <Header />
                    {
                        userLogged === null
                            ? <UserInn />
                            : <>{switchComponent()}</>
                    }
                    <Footer />
                </div>
            </div>
        </HomeContext.Provider>
    )
}

export default Home