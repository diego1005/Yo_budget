import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import "./Home.css";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Main from "../../Components/Main/Main";
import Table from '../../Components/Main/Secondary/Table/Table';
import Profile from '../Profile/Profile';
import Footer from "../../Components/Footer/Footer";
import UserInn from '../UserInn/UserInn';

function Home(props) {

    useEffect(() => {
        console.log('%cComponent Home is mount', 'color: green');
    }, [])

    const switchComponent = (componentName) => {
        switch (componentName) {
            case "table":
                return <Table />;
            case "profile":
                return <Profile />;
            case "userinn":
                return <UserInn user={props.set} />;
            default:
                return <Main />;
        }
    }

    return (
        (props.user === null && props.content !== "userinn")
            ? <Navigate replace to="/userinn" />
            : <div className={(props.content === undefined) ? "home" : "home home-vh"}>
                <Sidebar />
                <div className="container">
                    <Header />
                    {
                        switchComponent(props.content)
                    }
                    <Footer />
                </div>
            </div>
    )
}

export default Home