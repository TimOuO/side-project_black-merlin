import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { useState } from "react";
import { MenuData } from "./MenuData.js";

const Header = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <StyledHeader>
            <div className="Nav">
                <Link className="NavLink" to={"/"}>
                    <div>LOGO</div>
                </Link>
                <div className="NavMenu">
                    <Link className="NavLink" to={"/about"}>
                        <div>About</div>
                    </Link>
                    <Link className="NavLink" to={"/services"}>
                        <div>Services</div>
                    </Link>
                    <Link className="NavLink" to={"/contact-us"}>
                        <div>Contact Us</div>
                    </Link>
                    <Link className="NavLink" to={"/sign-up"}>
                        <div>Sign Up</div>
                    </Link>
                    <Link className="NavLink" to={"/sign-in"}>
                        <div className="NavBtn">
                            <div className="NavBtnLink">Sign In</div>
                        </div>
                    </Link>
                </div>
                <StyledBar onClick={showSidebar}>
                    {/* <div className="navbar">
                        <Link className="menu-bars" to={"/"}></Link>
                    </div> */}
                    <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                        <ul className="nav-menu-items">
                            <li className="navbar-toggle">
                                <Link className="menu-bars" to={"/"}>
                                    <AiIcons.AiOutlineClose />
                                </Link>
                            </li>
                            {MenuData.map((item, index) => {
                                return (
                                    <li key={index} className={item.cName}>
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </StyledBar>
            </div>
        </StyledHeader>
    );
};

const StyledBar = styled(FaIcons.FaBars)`
    display: none;
    color: #fff;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0px;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }

    .nav-meun {
        background: #000;
        width: 250px;
        height: 100vh;
        display: flex;
        justify-content: center;
        position: fixed;
        top: 0;
        left: -100%;
        transition: 850ms;
    }

    .nav-meun.active {
        left: 0;
        transition: 350ms;
    }

    .nav-text {
        display: flex;
        justify-content: start;
        align-items: center;
        padding: 8px 0px 8px 16px;
        list-style: none;
        height: 60px;
    }

    .nav-text a {
        text-decoration: none;
        color: #fff;
        font-size: 18px;
        width: 95%;
        height: 100%;
        display: flex;
        align-items: center;
        border-radius: 4px;
        &:hover {
            background-color: #15cdfc;
        }
    }

    .nav-menu-items {
        width: 100%;
    }

    .navbar-toggle {
    }
`;

const StyledHeader = styled.div`
    .Nav {
        background: #000;
        height: 80px;
        display: flex;
        justify-content: space-between;
        padding: 0.5rem calc((100vw-1000px) / 2);
        z-index: 10;
    }

    .NavLink {
        color: #fff;
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: 0 1rem;
        height: 100%;
        cursor: pointer;
        &:hover {
            transform: scale(1.15, 1.15);
            transition: transform 0.25s ease;
            text-decoration: none;
        }
        &:active {
            color: #15cdfc;
        }
        &:focus {
            color: #15cdfc;
        }
    }

    .NavMenu {
        display: flex;
        align-items: center;
        margin-right: -24px;
        @media screen and (max-width: 768px) {
            display: none;
        }
    }

    .NavBtn {
        display: flex;
        align-items: center;
        margin-right: 24px;
        @media screen and (max-width: 768px) {
            display: none;
        }
    }

    .NavBtnLink {
        border-radius: 4px;
        background: #256ce1;
        padding: 10px 22px;
        color: #fff;
        border: none;
        outline: none;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        text-decoration: none;
        margin-left: 24px;
        &:hover {
            transition: all 0.2s ease-in-out;
            background: #fff;
            color: #010606;
        }
    }
`;

export default Header;
