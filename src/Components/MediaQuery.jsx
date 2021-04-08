import React from 'react'
import { useMediaQuery } from 'react-responsive'
 

function MediaQuery(){
    //const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
    //const isBigScreen = useMediaQuery({ minDeviceWidth: 1824 });
    //const isTable = useMediaQuery({ maxWidth: 1224 });
    const isMobile = useMediaQuery({ maxDeviceWidth: 768 });
    //const isPortrait = useMediaQuery({ orientation: 'portrait' });
    //const isRetina = useMediaQuery({ minResolution: '2dppx' });

    return isMobile;
}

export default MediaQuery;