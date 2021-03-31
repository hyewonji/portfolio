import React from 'react';

import styled from 'styled-components';

import Carousel from 'react-material-ui-carousel'

import { Paper, Button } from '@material-ui/core'

import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import About2 from '../Images/About2.png';

import About4 from '../Images/About4.png';

import CSS from '../Images/CSS.png';

import HTML from '../Images/HTML.png';

import JS from '../Images/JS.png';

import ReactI from '../Images/ReactI.png';

import Redux from '../Images/Redux.png';

import Python from '../Images/Python.png';

import NodeJS from '../Images/NodeJS.png';

import MongoDB from '../Images/MongoDB.png';

import Git from '../Images/Git.png';

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    color: blue;
    overflow: scroll;
    transform: translateX(-(selected-1)*300px);
`

const Image1 = styled.div`
    width: 100%;
    height: 29vw;
    background : url(${About2}) center center/cover no-repeat;
`


const Image3 = styled.div`
    width: 100%;
    height: 29vw;
    background : url(${About4}) center center/cover no-repeat;
`

const IconContainer = styled.div`
    display: flex;
`

const icon = {
    width: '90px',
    height: '90px',
    marginRight: '10px'
}

export const Study1 = (props) => 
{
    var items = [
        <Paper style={{width: ''}}>
            <ImageContainer>
                <Image1></Image1>
            </ImageContainer>

            <Button className="CheckButton">
            </Button>
        </Paper>,        
        <Paper style={{width: ''}}>
            <ImageContainer>
                <Image3></Image3>
            </ImageContainer>

            <Button className="CheckButton">
            </Button>
        </Paper>
    ]

    return (
        <Carousel
        NextIcon={<ArrowForwardIos/>}
        PrevIcon={<ArrowBackIosIcon/>}
        >
            {items}
        </Carousel>
    )
}

export const Study2 = (props) => 
{
    var items = [ 
        <Paper style={{width: ''}}>
            <ImageContainer>
                <Image3 />
            </ImageContainer>

            <Button className="CheckButton">
            </Button>
        </Paper>,        
        <Paper style={{width: ''}}>
            <ImageContainer>
                <Image3 />
            </ImageContainer>
            <Button className="CheckButton">
            </Button>
        </Paper>,
    ]

    return (
        <Carousel
        NextIcon={<ArrowForwardIos/>}
        PrevIcon={<ArrowBackIosIcon/>}
        >
            {items}
        </Carousel>
    )
}

export const TechStackFrontend = () => {
    return (
        <IconContainer>
                <img src={HTML} style={icon}/>
                <img src={CSS} style={icon}/>
                <img src={JS} style={icon}/>
                <img src={ReactI} style={icon}/>
                <img src={Redux} style={icon}/>
        </IconContainer>
    )
}

export const TechStackBackend = () => {
    return (
        <IconContainer>
                <img src={Python} style={icon}/>
                <img src={NodeJS} style={icon}/>
                <img src={MongoDB} style={icon}/>
                <img src={Git} style={icon}/>
        </IconContainer>
    )
}

