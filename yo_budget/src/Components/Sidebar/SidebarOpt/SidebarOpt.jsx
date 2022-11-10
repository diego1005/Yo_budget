import React from 'react';
import { useHandleView } from '../../../Hooks/ViewHooks/useHandleView';
import "./SidebarOpt.css"

function SidebarOpt({ sidebarIcon, sidebarOpt }) {

    const { handleView } = useHandleView();

    return (
        <li>
            <p className='sidebar-link' onClick={() => handleView(sidebarOpt)}>
                <span className='sidebar-icon'>{sidebarIcon}</span>
                <span className='sidebar-opt'> {sidebarOpt}</span>
            </p>
        </li>
    )
}

export default SidebarOpt