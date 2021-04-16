import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import styled from "styled-components";

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <StyledBar>
            <nav className="NavbarItems">
                <Link className="Link" to="/">
                    <h1 className="navbar-logo">LOGO</h1>
                </Link>

                <div className="menu-icon" onClick={showSidebar}>
                    <i className={sidebar ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul
                    className={sidebar ? "nav-menu active" : "nav-menu"}
                    onClick={showSidebar}
                >
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className="Link" to={item.path}>
                                    <div className={item.cName}>
                                        {item.title}
                                    </div>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </StyledBar>
    );
};

const StyledBar = styled.div`
    .NavbarItems {
        background: linear-gradient(90deg, #3641a5, #161623);
        height: 80px;
        width: 100%;
        position: fixed;
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2rem;
    }
    .navbar-logo {
        color: #fff;
        justify-self: start;
        cursor: pointer;
    }
    .nav-menu {
        display: grid;
        grid-template-columns: repeat(5, auto);
        grid-gap: 10px;
        text-align: center;
        width: 70vw;
        justify-content: end;
        margin: 0 0 -4px;
    }
    .Link {
        text-decoration: none;
    }
    .nav-links {
        color: #fff;
        text-decoration: none;
        padding: 0.5rem 1rem;
    }
    .nav-links:hover {
        background-color: #6d76f7;
    }
    .fa-bars {
        color: #fff;
    }
    .nav-links-mobile {
        display: none;
    }
    .menu-icon {
        display: none;
    }
    @media screen and (max-width: 960px) {
        .NavbarItems {
            position: relative;
            position: fixed;
            z-index: 2;
        }
        .nav-menu {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 420px;
            position: absolute;
            top: 80px;
            left: -100%;
            opacity: 1;
            transition: all 0.5s ease;
        }
        .nav-menu.active {
            background: #6668f4;
            left: 0;
            opacity: 1;
            transition: all 0.5s ease;
            z-index: 2;
        }
        .nav-links {
            text-align: center;
            padding: 1.5rem;
            width: 100%;
            display: table;
        }
        .nav-links:hover {
            background-color: #7577fa;
            border-radius: 0;
        }
        .navbar-logo {
            position: absolute;
            top: 0;
            left: 0;
            transform: translate(25%, 30%);
        }
        .menu-icon {
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            transform: translate(-100%, 40%);
            font-size: 1.8rem;
            cursor: pointer;
        }
        .fa-times {
            color: #fff;
            font-size: 2rem;
        }
    }
`;

export default Navbar;
