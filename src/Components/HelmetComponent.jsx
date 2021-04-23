import React from 'react';

import { Helmet } from 'react-helmet';


const HelmetComponent = ({title}) => (
    <Helmet>
        <link href='//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css' rel='stylesheet' type='text/css' />
        <link href='//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-jp.css' rel='stylesheet' type='text/css' />
        <title>{title}</title>
    </Helmet>
)

export default HelmetComponent;