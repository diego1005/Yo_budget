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
    const { userLogged } = useContext(AppContext);

    useEffect(() => {
        console.log('%cComponent Home is mount', 'color: green');
        switchComponent();
    }, [view])

    const switchComponent = () => {
        switch (view) {
            case "operations":
                return <Secondary />;
            case "profile":
                return <Profile />;
            case "userinn":
            case "log in":
            case "sign in":
                return <UserInn />;
            default:
                return <Main />;
        }
    }
    console.log(view);

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