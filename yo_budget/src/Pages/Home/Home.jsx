import React from 'react';
import "./Home.css";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Main from "../../Components/Main/Main";
import Footer from "../../Components/Footer/Footer";
import Table from "../../Components/Main/Secondary/Table/Table";
import UserInn from '../UserInn/UserInn';

function Home(props) {
    return (
        <div className={props.content === undefined ? "home" : "home home-vh"}>
            <Sidebar />
            <div className="container">
                <Header />
                {
                    props.content === undefined
                        ? <Main />
                        : props.content === "table"
                            ? <Table />
                            : props.content === "userinn" &&
                            <UserInn />
                }
                <Footer />
            </div>
        </div>
    )
}

export default Home