import React from 'react';
import styled from 'styled-components';

const TopButton = () => {
    const handleBackToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <StyledWrapper>
            <button className="button" onClick={handleBackToTop}>
                <svg viewBox="0 0 384 512" className="svgIcon">
                    <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                </svg>
            </button>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .button {
    width: 35px;
    height: 35px;
    border-radius 0%;
    background-color: black;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
    opacity: 0.6;
    
    cursor: pointer;
    transition-duration: 0.3s;
    overflow: hidden;
    position: relative;
  }

  .svgIcon {
    width: 11px;
    transition-duration: 0.3s;
  }

  .svgIcon path {
    fill: white;
  }

  .button:hover {
    width: 140px;
    border-radius: 0px;
    transition-duration: 0.3s;
    background-color: black;
    align-items: center;
    opacity: 1;
  }

  .button:hover .svgIcon {
    /* width: 20px; */
    transition-duration: 0.3s;
    transform: translateY(-200%);
  }

  .button::before {
    position: absolute;
    bottom: -20px;
    content: "Back to Top";
    color: #e9e9e9;
    /* transition-duration: .3s; */
    font-size: 0px;
  }

  .button:hover::before {
    font-family: Garet;
    font-size: 15px;
    opacity: 1;
    bottom: unset;
    /* transform: translateY(-30px); */
    transition-duration: 0.3s;
  }`;

export default TopButton;
