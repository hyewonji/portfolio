import React from 'react';

import styled from 'styled-components';

import Carousel from 'react-material-ui-carousel'

import { Paper } from '@material-ui/core'

import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import About2 from '../Images/About2.png';

import About4 from '../Images/About4.png';

import CSS from '../Images/Icon/CSS.png';

import HTML from '../Images/Icon/HTML.png';

import JS from '../Images/Icon/JS.png';

import ReactI from '../Images/Icon/ReactI.png';

import Redux from '../Images/Icon/Redux.png';

import Python from '../Images/Icon/Python.png';

import NodeJS from '../Images/Icon/NodeJS.png';

import MongoDB from '../Images/Icon/MongoDB.png';

import Git from '../Images/Icon/Git.png';


const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    background: blue;
    overflow: scroll;
    //transform: translateX(-(selected-1)*300px);
`

const Image = styled.div`
    width: 100%;
    height: 29vw;
    background : url(${props => props.img}) center center/cover no-repeat;
`

const IconContainer = styled.div`
    display: flex;
    width: 100%;
    height: 29vw; 
`

const icon = {
    width: '90px',
    height: '90px',
    marginRight: '10px'
}

export const Study1 = (props) => 
{
    var items = [About2, About4];

    return (
        <Carousel
        NextIcon={<ArrowForwardIos/>}
        PrevIcon={<ArrowBackIosIcon/>}
        navButtonsAlwaysVisible={true}
        animation='slide'        
        indicatorIconButtonProps={{
            style: {
                display: 'none'    
            }
        }}
        >
            {items.map((item,i) =>
                <Paper>
                    <ImageContainer>
                        <Image img={item} i={i}/>
                    </ImageContainer>
                </Paper> )}
        </Carousel>
    )
}

export const Study2 = (props) => 
{
    var items = [ About2, About4 ]

    return (
        <Carousel
        NextIcon={<ArrowForwardIos/>}
        PrevIcon={<ArrowBackIosIcon/>}
        navButtonsAlwaysVisible={true}
        animation='slide'    
        indicatorIconButtonProps={{
            style: {
                display: 'none'    
            }
        }}
        >
            {items.map((item,i) =>
                <Paper>
                    <ImageContainer>
                        <Image img={item} i={i}/>
                    </ImageContainer>
                </Paper> )}
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

