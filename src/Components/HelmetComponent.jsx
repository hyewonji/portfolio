import React from 'react';

import { Helmet } from 'react-helmet';


const HelmetComponent = ({title}) => (
    <Helmet>
        <link href='//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css' rel='stylesheet' type='text/css'></link>
        <title>{title}</title>
    </Helmet>
)

export default HelmetComponent;