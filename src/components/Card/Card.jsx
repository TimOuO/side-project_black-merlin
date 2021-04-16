import React from "react";
import styled from "styled-components";
import Title from "react-vanilla-tilt";

const Card = ({ Number, title, text, href }) => {
    return (
        <StyledCard>
            <Title
                className="box"
                style={{ height: 400, width: 280 }}
                options={{
                    scale: 2,
                    max: 25,
                    glare: true,
                    "max-glare": 1,
                }}
            >
                <div className="card">
                    <div className="content">
                        <h2>{Number}</h2>
                        <h3>{title}</h3>
                        <p>{text}</p>
                        <a href={href} target="_blank" rel="noreferrer">
                            Listen more
                        </a>
                    </div>
                </div>
            </Title>
        </StyledCard>
    );
};

const StyledCard = styled.div`
    .box {
        background: rgba(255, 255, 255, 0);
        margin: 30px;
        border-radius: 15px;
        width: 280px;
        height: 400px;
        backdrop-filter: blur(5px);
    }
    .card {
        position: relative;
        width: 280px;
        height: 400px;
        /* margin: 30px; */
        box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
        border-radius: 15px;
        background: rgba(255, 255, 255, 0.1);
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 1px solid rgba(255, 255, 255, 0.5);
        border-left: 1px solid rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(5px);
    }
    .card :hover {
        transform: translateY(0px);
        opacity: 1;
    }
    .content {
        padding: 20px;
        text-align: center;
        transform: translateY(100px);
        opacity: 0;
        transition: 0.5s;
    }
    .content h2 {
        position: absolute;
        top: -20px;
        right: 30px;
        font-size: 7em;
        color: rgba(255, 255, 255, 0.05);
        pointer-events: none;
    }
    .content h3 {
        font-size: 1.8em;
        color: #fff;
        z-index: 1;
    }
    .content p {
        font-size: 1em;
        color: #fff;
        font-weight: 300;
    }
    .content a {
        position: relative;
        display: inline-block;
        padding: 8px 20px;
        margin-top: 15px;
        background: #fff;
        color: #000;
        border-radius: 20px;
        text-decoration: none;
        font-weight: 500;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    }
`;

export default Card;
