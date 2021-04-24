import React, { useState } from 'react';

import { Link , withRouter} from 'react-router-dom';

import styled, { css } from 'styled-components';

import { MdKeyboardArrowDown } from "react-icons/md";

import { slideDownNav, slideUpNav, fadein } from './Keyframe';

const NavBar = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    height: 100px;
    width: 100vw;
    position: fixed;
    z-index: 100;
    margin-bottom: ${props => props.navOpen ? '30px' : '0'};
`

const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 20px 40px;
    font-size: 20px;
    color: white;
    background: #24292F;
    font-weight: 400;
`

const Bars = styled.div`
    font-size: 40px;
    position: absolute;
    top: 10px;
    right: 40px;
    transition: 0.125s all ease-in;
    &:hover {
        cursor: pointer;
        font-size: 45px;
    }
    ${props =>
        props.navOpen &&
        css`
        transform: translate(0%, -17%) rotate(180deg);
        `}
`

const List = styled.div`
    display: ${props => props.navOpen ? 'flex' : 'none'};
    justify-content: space-around;
    align-items: center;
    width: 100%;
    font-size: 17px;
    border-bottom: solid 1px #cecece; 
    background: white;
    animation: ${props => props.navOpen ? slideDownNav : slideUpNav} 0.125s ease-in, ${fadein} 0.3s ease-in; 
`

const Item = styled.div`
    padding: 20px;
    color: ${props => props.current ? "#6FAA55" : "#3d3d3d"};
    font-weight: ${props => props.current ? "700" : "400"};
    &:hover{
        cursor: pointer;
    }
`

const Navigatoin = withRouter(({ location: { pathname } }) => {
    const [navOpen,setNavOpen] = useState(false);

    const onClick = () => {
        setNavOpen(!navOpen);
    }
    return (
        <>

            <NavBar>
                <Title> 
                    <Link to="/" style={{color: 'white'}}>
                        hye1.portfolio
                    </Link> 
                </Title>
                <Bars navOpen={navOpen}><MdKeyboardArrowDown onClick={onClick} style={{color: 'white'}}/></Bars>
                <List navOpen={navOpen}>
                    <Link to="/" >
                        <Item current={pathname === '/'}>
                            Introduce
                        </Item>
                    </Link>
                    <Link to="/about" >
                        <Item current={pathname === '/about'}>
                            About
                        </Item>
                    </Link>                            
                    <Link to="/projects" >
                        <Item current={pathname === '/projects'}>
                            Projects
                        </Item>
                    </Link>
                </List>
            </NavBar>
            
        </>
    )
})

export default Navigatoin;