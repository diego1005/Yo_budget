import React, { useState, useEffect } from 'react';
import "./Home.css";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Main from "../../Components/Main/Main";
import Footer from "../../Components/Footer/Footer";
import UserInn from '../UserInn/UserInn';

function Home(props) {

    const [userLogged, setUserLogged] = useState(null);

    useEffect(() => {
        console.log('%cSe monto el componente', 'color: green');
        fetch("http://localhost:3001/user/checkToken")
            .then(response => response.json())
            .then(data => {
                if (data.action !== "redirect") {
                    setUserLogged(data.token)
                } else {
                    window.localStorage.clear();
                }
            })
            .catch(err => console.error(err))
    }, [userLogged])

    console.log(userLogged);

    return (
        <div className={(userLogged !== null && props.content === undefined) ? "home" : "home home-vh"}>
            <Sidebar />
            <div className="container">
                <Header />
                {
                    (userLogged === null || props.content === "userinn")
                        ? <UserInn user={setUserLogged} />
                        : <Main />
                }
                <Footer />
            </div>
        </div>
    )
}

export default Home