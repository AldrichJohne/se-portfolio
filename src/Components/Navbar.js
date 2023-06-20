import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import "../Styles/main.css";
import webAppLogo from "../Assets/icons/LogoAJ.png";

function Navbar() {
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header>
            <img class="img-logo" alt="logo" src={webAppLogo}></img>
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