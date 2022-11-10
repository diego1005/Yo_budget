import React, { useEffect, useContext } from 'react';
import { AppContext, HomeContext } from '../../Context/context';
// import { Navigate } from 'react-router-dom';
import "./Home.css";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Main from "../../Components/Main/Main";
import Profile from '../Profile/Profile';
import Footer from "../../Components/Footer/Footer";
import UserInn from '../UserInn/UserInn';
import Secondary from '../../Components/Main/Secondary/Secondary';
import { useView } from '../../Hooks/ViewHooks/useView';
import { homeCssRule } from '../../Common/Views/homeCssRule';

function Home() {

    const { view, changeView } = useView();
    const { userLogged, userIsLogged } = useContext(AppContext);

    useEffect(() => {
        console.log('%cComponent Home is mount', 'color: green');
        userIsLogged();
        switchComponent();
    }, [view])

    const switchComponent = () => {
        console.log(view);
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

    return (
        <HomeContext.Provider value={{ changeView }}>
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