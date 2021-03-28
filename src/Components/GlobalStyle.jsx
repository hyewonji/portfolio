import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700");
    ${reset};
    *{
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
        display:flex;
        width: 100vw;
        height: auto;
        overflow: scroll;
    }
    a{
        color: #0f0f0f;
    }
`

export default GlobalStyles;