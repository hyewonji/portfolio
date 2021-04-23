import { createGlobalStyle } from 'styled-components';

import reset from 'styled-reset';


const GlobalStyles = createGlobalStyle`

    ${reset};

    //@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;600;700&display=swap');
    //@import url('https://fonts.googleapis.com/css2?family=Gothic+A1:wght@300;400;500;600&display=swap');
    //@import url('https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css');

    *{  
        line-height:1.5;
        //font-family: 'Noto Sans KR', sans-serif;
        //font-family: 'Spoqa Han Sans Neo', 'Spoqa Han Sans JP', sans-serif;
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
        font-family: 'Spoqa Han Sans Neo', 'Spoqa Han Sans JP', sans-serif;
        //font-family: 'Gothic A1', sans-serif;
        //font-family: 'Noto Sans KR', sans-serif;

    }

    a{
        color: #0f0f0f;
    }

    h1{
        color: #3a3a3a;
    }
`

export default GlobalStyles;