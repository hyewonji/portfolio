import { keyframes } from 'styled-components';

export const fadein = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

export const fadeinTootlip = keyframes`
    0% { 
        opacity: 0; 
    }
    40% { 
        opacity: 0; 
    }
    50% { 
        opacity: 1; 
    }
    100% { 
        opacity: 1;
    }
`

export const slideUp = keyframes`
    0% {
        transform: translateY(50%);
    }
    100% {
        transform: translateY(0);
    }
`

export const slideDown = keyframes`
    0% {
        transform: translateY(-50%);
    }
    100% {
        transform: translateY(0);
    }
`

export const slideUpNav = keyframes`
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-100);
    }
`

export const slideDownNav = keyframes`
    0% {
        transform: translateY(-100%);
    }
    100% {
        transform: translateY(0);
    }
`

export const slideUpLittle = keyframes`
    0% {
        transform: translateY(30%);
    }
    100% {
        transform: translateY(0);
    }
`

export const slideRight = keyframes`
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0);
    }
`


export const slideLeft = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-100%);
    }
`

export const typing = keyframes`
    from{ width: 0; }
`

export const cursor = keyframes`
    50%{ border-color: transparent; }
`