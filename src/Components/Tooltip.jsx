import React from 'react';

import styled from 'styled-components';

import {fadeinTootlip} from './Keyframe';


const Container = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  align-items: center;
  justify-content: center;  
  
  &:hover > .tooltip,
  &:active > .tooltip {
    display: block;
    animation: ${fadeinTootlip} 1s ease-in;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 6px;
    border-radius: 3px;
  }
`;

const Content = styled.div`
  font-size: 12px;
  display: none;
  position: absolute;
  z-index: 200;
`;

const Tooltip = ({children, message})=> {
	return (
	  <Container>
	    {children}
	    <Content className="tooltip">{message}</Content>
	  </Container>
	);
}

export default Tooltip;