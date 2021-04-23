import { createGlobalStyle } from 'styled-components';

import reset from 'styled-reset';


const GlobalStyles = createGlobalStyle`

    ${reset};

    *{  
        line-height:1.5;
        box-sizing: border-box;
        margin:0;
        padding:0;
        outline:none;
        text-decoration:none;
        list-style:none;
        &::-webkit-scrollbar{
            display:none;
        }
    }

    html,
    body{
        padding-top: 50px;
        display:flex;
        width: 100vw;
        height: auto;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    }

    a{
        color: #0f0f0f;
    }

    h1{
        color: #3a3a3a;
    }
`

export default GlobalStyles;