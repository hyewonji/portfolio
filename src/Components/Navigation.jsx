import React from 'react';

import { Link , withRouter} from 'react-router-dom';

import styled from 'styled-components';


const NavBar = styled.div`
    flex-direction: column;
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
`

const List = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    font-size: 18px;
    border-bottom: solid 1px #cecece; 
`

const Item = styled.div`
    padding: 20px;
    color: ${props => props.current ? "#6FAA55" : "#24292F"};
    &:hover{
        cursor: pointer;
    }
`

const Navigatoin = withRouter(({ location: { pathname } }) => {
    return (
        <>
            <NavBar>
                <Title> CodeOne </Title>
                <List>
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