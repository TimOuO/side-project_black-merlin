import React from "react";
import styled from "styled-components";
import Card from "../components/Card/Card";
import { CardData } from "../components/Card/CardData";

const ServicesPage = () => {
    return (
        <StyledServices>
            {/* <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "10vh",
                }}
            >
                <h1>ServicesPage</h1>
            </div> */}
            <div className="body">
                <div className="container">
                    {CardData.map((item, index) => {
                        return (
                            <Card
                                key={index}
                                Number={item.Number}
                                title={item.title}
                                text={item.text}
                                href={item.href}
                            />
                        );
                    })}
                </div>
            </div>
        </StyledServices>
    );
};

const StyledServices = styled.div`
    padding-top: 80px;
    /* margin: 0;
    padding: 0;
    box-sizing: border-box; */
    .body {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background: #161623;
    }
    .body::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(#f00, #f0f);
        clip-path: circle(25% at right 70%);
    }
    .body::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(#2196f3, #e91e63);
        clip-path: circle(10% at 5% 40%);
    }
    .container {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 1200px;
        flex-wrap: wrap;
        z-index: 1;
    }
`;

export default ServicesPage;
