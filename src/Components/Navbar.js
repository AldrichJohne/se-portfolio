import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import "../Styles/main.css";
import webAppLogo from "../Assets/icons/logo-nobg.png";

function Navbar() {
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header>
            <div className="logo-container">
                <img className="img-logo" alt="logo" src={webAppLogo}/>
                <span className="logo-text">AJRUSofware</span>
            </div>
            <nav ref={navRef}>
                <a href={"/#"}>About</a>
                <a href={"/#"}>Contact</a>
                <a href={"/#"}>Projects</a>
                <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavBar}>
                <FaBars/>
            </button>
        </header>
    );
}

export default Navbar;