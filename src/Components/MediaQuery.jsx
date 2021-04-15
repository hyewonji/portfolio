import { useMediaQuery } from 'react-responsive'
 
const Mobile = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    console.log(isMobile);
    return isMobile
}

export default Mobile;