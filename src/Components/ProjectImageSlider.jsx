import React from 'react';

import styled from 'styled-components';

import Carousel from 'react-material-ui-carousel'

import { Paper } from '@material-ui/core'

import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


import Login from '../Images/WWW/Login.png';

import Home from '../Images/WWW/Home.png';

import AddCity from '../Images/WWW/AddCity.png';

import Navigator from '../Images/WWW/Navigator.png';


import Movies from '../Images/MovieDocker/Movies.png';

import TV from '../Images/MovieDocker/TV.png';

import Detail from '../Images/MovieDocker/Detail.png';

import Search from '../Images/MovieDocker/Search.png';


import ToDoList from '../Images/PurpleToDoList/ToDoList.png';

import ToDoList2 from '../Images/PurpleToDoList/ToDoList2.png';


import JobHome from '../Images/SearchRecruitment/JobHome.png';

import JobReport from '../Images/SearchRecruitment/JobReport.png';


import RedditHome from '../Images/SubReddit/RedditHome.png';

import RedditReport from '../Images/SubReddit/RedditReport.png';

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: blue;
    overflow: scroll;
`

const Image = styled.div`
    width: 100%;
    height: 70vh;
    background : url(${props => props.img}) center center/cover no-repeat;
`

export const WWWImgSlider = () => 
{
    const items = [ Login, AddCity, Navigator, Home ]

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

export const MovieDockerImgSlider = () => 
{
    const items = [ Movies, TV, Search, Detail ]

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

export const PurpleToDoListImageSlider = () => 
{
    const items = [ ToDoList, ToDoList2 ]

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

export const SearchRecruitmentImageSlider = () => 
{
    const items = [ JobHome, JobReport ]

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

export const SubRedditImageSlider = () => 
{
    const items = [ RedditHome, RedditReport ]

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