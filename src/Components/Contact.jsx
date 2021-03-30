import React from 'react';
import styled from 'styled-components';
import Contact1 from '../Images/Contact1.png';

const ContactContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    padding: 0 50px 30px 0;
    position: absolute;
    right: 0;
    bottom: 0;
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
                <GitIcon src={Contact1}></GitIcon>
            </a>
        </ContactContainer>
    )
}

export default Contact