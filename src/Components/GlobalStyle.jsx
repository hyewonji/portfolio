import { createGlobalStyle } from 'styled-components';

import reset from 'styled-reset';


const GlobalStyles = createGlobalStyle`

    ${reset};

    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;600;700&display=swap');

    *{  
        line-height:1.5;
        font-family: 'Noto Sans KR', sans-serif;
        box-sizing: border-box;
        margin:0;
        padding:0;
        outline:none;
        text-decoration:none;
        list-style:none;
        font-family: 'Mulish', sans-serif;
    }
    html,
    body{
        padding-top: 50px;
        display:flex;
        width: 100vw;
        height: auto;
        overflow: scroll;
    }
    a{
        color: #0f0f0f;
    }
    h1{
        color: #3a3a3a;
    }
`

export default GlobalStyles;