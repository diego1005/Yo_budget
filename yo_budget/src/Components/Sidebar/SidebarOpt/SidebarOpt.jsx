import React from 'react';
import "./SidebarOpt.css"
import { Link } from "react-router-dom"

function SidebarOpt(props) {
    return (
        <li>
            <Link to={props.sidebarTo} className='sidebar-link'>
                {/* icon */}
                <span className='sidebar-opt'> {props.sidebarOpt}</span>
            </Link>
        </li>
    )
}

export default SidebarOpt