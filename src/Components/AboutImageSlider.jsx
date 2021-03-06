import React from 'react';

import styled from 'styled-components';

import Carousel from 'react-material-ui-carousel'

import { Paper } from '@material-ui/core'

import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import Tooltiop from './Tooltip';

import Study1 from '../Images/About/Study1.png';

import Study2 from '../Images/About/Study2.png';

import Study4 from '../Images/About/Study4.png';

import Study5 from '../Images/About/Study5.png';

import CSS from '../Images/Icon/CSS.png';

import HTML from '../Images/Icon/HTML.png';

import JS from '../Images/Icon/JS.png';

import ReactI from '../Images/Icon/ReactI.png';

import Redux from '../Images/Icon/Redux.png';

import Expo from '../Images/Icon/Expo.png';

import Python from '../Images/Icon/Python.png';

import NodeJS from '../Images/Icon/NodeJS.png';

import MongoDB from '../Images/Icon/MongoDB.png';

import Git from '../Images/Icon/Git.png';


const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: #F2F2F2;
    overflow: hidden;
`

const Image = styled.div`
    width: 100%;
    height: 30vw;
    background : url(${props => props.img}) center center/cover no-repeat;
`

const IconContainer = styled.div`
    display: flex;
    width: 100%;
    height: 3vw; 
`

const icon = {
    width: '7vh',
    height: '7vh',
    marginRight: '10px'
}

export const StudyImageSlider = (props) => 
{
    var items = [Study1, Study2];

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
                <Paper key={i} >
                    <ImageContainer>
                        <Image img={item}/>
                    </ImageContainer>
                </Paper> )}
        </Carousel>
    )
}

export const StudyImageSlider2 = (props) => 
{
    var items = [ Study4, Study5 ]

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
            {items.map((item, index) =>
                <Paper key={index}>
                    <ImageContainer>
                        <Image img={item}/>
                    </ImageContainer>
                </Paper> )}
        </Carousel>
    )
}

export const TechStackFrontend = () => {
    return (
        <IconContainer>
            <Tooltiop message="HTML">
                <img src={HTML} alt="" style={icon}/>
            </Tooltiop>
            <Tooltiop message="CSS">
                <img src={CSS} alt="" style={icon}/>
            </Tooltiop>
            <Tooltiop message="JS">
                <img src={JS} alt="" style={icon}/>
            </Tooltiop>
            <Tooltiop message={`React\nReactNative`}>
                <img src={ReactI} alt="" style={icon}/>
            </Tooltiop>
            <Tooltiop message="Redux">
                <img src={Redux} alt="" style={icon}/>
            </Tooltiop>
            <Tooltiop message="Expo">
                <img src={Expo} alt="" style={icon}/>
            </Tooltiop>
        </IconContainer>
    )
}

export const TechStackBackend = () => {
    return (
        <IconContainer>
            <Tooltiop message="Python">
                <img src={Python} alt="" style={icon}/>
            </Tooltiop>
            <Tooltiop message="NodeJS">
                <img src={NodeJS} alt="" style={icon}/>
            </Tooltiop>
            <Tooltiop message="MongoDB">
                <img src={MongoDB} alt="" style={icon}/>
            </Tooltiop>
            <Tooltiop message="Git">
                <img src={Git} alt="" style={icon}/>
            </Tooltiop>
        </IconContainer>
    )
}

