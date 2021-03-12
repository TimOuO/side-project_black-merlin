import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

const Header = () => {
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
                {/* <Link className="NavLink" to={"/sign-in"}>
                    <div className="NavBtn">
                        <div className="NavBtnLink">Sign In</div>
                    </div>
                </Link> */}
                <StyledBar />
            </div>
        </StyledHeader>
    );
};

const StyledBar = styled(FaBars)`
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
