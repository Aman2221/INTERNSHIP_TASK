import React, { useState } from 'react'
import '../CSS/Sidebar.css'

const Sidebar = () => {

    const [sidebarActive, setActiveSideBar] = useState();

    return (
        <div className="sidebar">
            <div className={sidebarActive ? 'sideBarSubDiv' : "ActiveSideBar"}>
            { !sidebarActive ? (
                <i className="fas fa-chevron-circle-left" onClick={(e) => setActiveSideBar(true)}></i>
                ) : (
                <i className="fas fa-chevron-circle-right" onClick={(e) => setActiveSideBar(false)}></i>
                ) 
            } 
                <ol>
                    <li><i className="fas fa-home"></i>Home</li>
                    <li><i class="fas fa-briefcase"></i>Work</li>
                    <li><i class="fas fa-info-circle"></i>About</li>
                    <li><i className="fas fa-phone-alt"></i>Contact</li>
                    <li><i className="fas fa-hands-helping"></i>Help</li>
                    <li><i className="fas fa-sign-in-alt"></i>Login</li>
                </ol>
            </div>
        </div>
    )
}

export default Sidebar
