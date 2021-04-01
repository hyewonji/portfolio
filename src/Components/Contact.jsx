import React from 'react';

import styled from 'styled-components';

import Github from '../Images/Favicon/Github.png';


const ContactContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    margin: 0 50px 30px 10px;
    border-radius: 10px;
    position: absolute;
    position: fixed;
    right: 0;
    bottom: 0;
    background: white;
`

const GitIcon = styled.img`
    width: 20px;
    height: 20px;
`

function Contact(){
    return (
        <ContactContainer>
            +82 10-7238-8873&nbsp; / &nbsp;wlgpdnjs8873@naver.com&nbsp; / &nbsp; 
            <a href='https://github.com/hyewonji'>
                <GitIcon src={Github}></GitIcon>
            </a>
        </ContactContainer>
    )
}

export default Contact