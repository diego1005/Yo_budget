import React from 'react';
import "./Home.css";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Main from "../../Components/Main/Main";
import Footer from "../../Components/Footer/Footer";
import Table from "../../Components/Main/Secondary/Table/Table"

function Home(props) {
    return (
        <div className={props.content === undefined ? "home" : "home home-table"}>
            <Sidebar />
            <div className="container">
                <Header />
                {
                    props.content !== undefined &&
                        props.content === "table"
                        ? <Table />
                        : <Main />
                }
                <Footer />
            </div>
        </div>
    )
}

export default Home