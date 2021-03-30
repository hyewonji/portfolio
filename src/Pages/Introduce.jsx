import React from 'react';

import styled from 'styled-components';

import Introduce from '../Images/Introduce.png';

const Main = styled.div`
    width :100vw;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    padding: 30px 10%;
`

const Title = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
`

const TitleName = styled.h1`
    color: #9178d1;
    font-size: 50px;
    font-weight: 500px;
`
const TitlePosition = styled.h5`
    color: #cfc6e6;
    font-size: 30px;
    font-weight: 400px;
`

const Profile = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`
const Image = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 50%;
`
const Contents = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 19px;
    font-weight: 300;
    width: 50%;
`

function Home(){
    return ( 
        <Main>
            <Title>
                <TitleName>JI HYE WON</TitleName>
                <TitlePosition>Frontend Developer, Web Publisher</TitlePosition>
            </Title>
            <Profile>
                <Image src={Introduce}></Image>
                <Contents>
                함께 성장하고자 하는 개발자의 문화를 사랑하고,<br/>탐구하는것을 즐기는 늦바람난 개발자입니다.<br/>
                <br/>‘지금 이순간 춤을 춰라'라는 말을 좋아하고, 근성과 도전정신으로 끊임없이 성장합니다.<br/>
                <br/>트렌드를 받아들이고 적용해보며 새로운 변화에 적응하는 개발자가 되고싶습니다.
                </Contents>
            </Profile>
        </Main>
    )
}

export default Home;
