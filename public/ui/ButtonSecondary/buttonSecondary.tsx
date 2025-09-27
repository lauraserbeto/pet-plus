import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

interface ButtonSecondaryProps{
    children?: React.ReactNode;
    onClick?: () => void;
    icon?: IconDefinition;
}

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({ children, onClick, icon }) => {
  return (
    <StyledWrapper>
      <button onClick={onClick}>
        {icon && <FontAwesomeIcon icon={icon} className='icon'/>}
        {children}
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    position: relative;
    padding: 10px 20px;
    border-radius: 50px;
    border: 1px solid #fff;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 2px;
    background: transparent;
    color: #fff;
    overflow: hidden;
    box-shadow: 0 0 0 0 transparent;
    -webkit-transition: all 0.2s ease-in;
    -moz-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
  }

  .icon{
    font-size: 1rem;
  }

  button:hover {
    background: #0077b6;
    color: #fff;
    box-shadow: 0 0 15px 5px #8ecae6;
    -webkit-transition: all 0.2s ease-out;
    -moz-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out;
  }

  button:hover::before {
    -webkit-animation: sh02 0.5s 0s linear;
    -moz-animation: sh02 0.5s 0s linear;
    animation: sh02 0.5s 0s linear;
  }

  button::before {
    content: '';
    display: block;
    width: 0px;
    height: 86%;
    position: absolute;
    top: 7%;
    left: 0%;
    opacity: 0;
    background: #fff;
    box-shadow: 0 0 50px 30px #fff;
    -webkit-transform: skewX(-20deg);
    -moz-transform: skewX(-20deg);
    -ms-transform: skewX(-20deg);
    -o-transform: skewX(-20deg);
    transform: skewX(-20deg);
  }

  @keyframes sh02 {
    from {
      opacity: 0;
      left: 0%;
    }

    50% {
      opacity: 1;
    }

    to {
      opacity: 0;
      left: 100%;
    }
  }

  button:active {
    box-shadow: 0 0 0 0 transparent;
    -webkit-transition: box-shadow 0.2s ease-in;
    -moz-transition: box-shadow 0.2s ease-in;
    transition: box-shadow 0.2s ease-in;
  }`;

export default ButtonSecondary;
