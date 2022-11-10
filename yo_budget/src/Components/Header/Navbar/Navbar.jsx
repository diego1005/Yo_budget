import React from 'react';
import "./Navbar.css";
import SearchBar from "./SearchBar/SearchBar";
import Navicon from "./Navicon/Navicon";
import { useHandleView } from '../../../Hooks/ViewHooks/useHandleView';

function Navbar() {

    const { handleView } = useHandleView();

    return (
        <div className='navbar'>
            <div className="nav-left">
                <i className="fa-solid fa-house" onClick={() => handleView("dashboard")}></i>
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