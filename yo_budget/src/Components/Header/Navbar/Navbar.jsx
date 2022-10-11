import React from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";
import Navicon from "./Navicon/Navicon";

function Navbar() {
    return (
        <div className='navbar'>
            <div className="nav-left">
                <Link to="/"><i className="fa-solid fa-house"></i></Link>
                <p>/</p>
                <p className='left-title'>Yo_budget</p>
            </div>
            <div className="nav-right">
                <SearchBar />
                <Navicon />
            </div>
        </div>
    )
}

export default Navbar