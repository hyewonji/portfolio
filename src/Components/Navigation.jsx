import React, { useState } from 'react';

import { Link , withRouter} from 'react-router-dom';

import styled, { css } from 'styled-components';

import { MdKeyboardArrowUp } from "react-icons/md";

import { IoIosArrowUp } from "react-icons/io";

import { slideDownNav, slideUpNav } from './Keyframe';

const NavBar = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    height: 100px;
    width: 100vw;
    position: fixed;
`

const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 20px 40px;
    font-size: 23px;
    color: white;
    background: #24292F;
    font-weight: 500;
`

const Bars = styled.div`
    font-size: 40px;
    color: white;
    position: absolute;
    top: 10px;
    right: 40px;
    transition: 0.125s all ease-in;
    &:hover {
        cursor: pointer;
        color: #6FAA55;
    }
    ${props =>
        props.navOpen &&
        css`
        transform: translate(0%, -10%) rotate(180deg);
        `}
`

const List = styled.div`
    display: ${props => props.navOpen ? 'flex' : 'flex'};
    justify-content: space-around;
    width: 100%;
    font-size: 17px;
    border-bottom: solid 1px #cecece; 
    animation: ${props => props.navOpen ? slideDownNav : slideUpNav} 0.125s ease-in;
    z-index: -10;
`

const Item = styled.div`
    padding: 20px;
    color: ${props => props.current ? "#6FAA55" : "#3d3d3d"};
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
                <Title> CodeOne </Title>
                <Bars navOpen={navOpen}><MdKeyboardArrowUp onClick={onClick}/></Bars>
                    <List navOpen={navOpen}>
                        <Link to="/" >
                            <Item current={pathname === '/'}>
                                Indroduce
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