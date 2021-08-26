import React, {useState} from 'react'
import '../CSS/Nav.css'
import '../CSS/Sidebar.css'
import '../CSS/MainDiv.css'
import MainDiv from './MainDiv';

const Nav = () => {

    const [sidebarActive, setActiveSideBar] = useState();
    const [removeSideClass, setRemoveSideClass] = useState();

    const handleSideBarLeft = () => {
        setActiveSideBar(false)
        setRemoveSideClass(false);
    }

     const handleSideBarRight = () => {
        setActiveSideBar(true)
        setRemoveSideClass(true);
    }
    return (
        <div className='navbar'>
            <div className="navSubDiv">
                { !sidebarActive ? (
                    <i className="fas fa-chevron-circle-left" onClick={handleSideBarRight}></i>
                    ) : (
                    <i className="fas fa-chevron-circle-right" onClick={handleSideBarLeft}></i>
                    ) 
                } 

                <h3>NavBar</h3>

                <div></div>
            </div>

            <div className={ removeSideClass ? "setWidth100" : "sidebarAndRightDiv"}>
                <div className="sidebar">
                    <div className={sidebarActive ? 'sideBarSubDiv' : "ActiveSideBar"}>
                    
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

                <MainDiv />

            </div>
        </div>
    )
}

export default Nav
