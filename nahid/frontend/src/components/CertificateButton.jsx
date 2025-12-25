import React from "react";
import styled from "styled-components";

const Button = ({ href, children }) => {
    const handleClick = () => {
        window.open(href, "_blank"); // opens certificate
    };

    return (
        <StyledWrapper>
            <button className="button" onClick={handleClick}>
                {children}
            </button>
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
    .button {
    --bg: white;
    --hover-bg: #ff90e8;
    --hover-text: #000;
    color: #fff;
    cursor: pointer;
    border: 1px solid var(--bg);
    padding: 4px ;
    background: black;
    transition: 0.2s;
    }

    .button:hover {
    
    transform: translate(-0.25rem, -0.25rem);
    background: black;
    box-shadow: 0.25rem 0.25rem #A50000;
    }

    .button:active {
    transform: translate(0);
    box-shadow: none;
    }`

export default Button;
