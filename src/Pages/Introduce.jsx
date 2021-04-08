import React from 'react';

import styled from 'styled-components';

import ReactTypingEffect from 'react-typing-effect';

import ProfileImg from '../Images/ProfileImg.jpeg';

import { fadein } from '../Components/Keyframe';


const Main = styled.div`
    line-height: 1.5;
    width :100vw;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    padding: 60px 10%;
    animation: 2s ${fadein} ease-in-out; 
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
    font-weight: 600;
    font-size: 60px;
`
const TitlePosition = styled.h5`
    color: #cfc6e6;
    font-size: 30px;
    font-weight: 700;
`

const Profile = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 768px){
        flex-direction: column;
        width: 100%;
    }
`
const Image = styled.img`
    width: 330px;
    height: 330px;
    border-radius: 50%;
`
const ContentsContainer = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 50%;
    height: 200px;
    @media screen and (max-width: 768px){
        width: 100%;
    }
`

const Greet = styled.h1`
    font-size: 40px;
    font-weight:300;
    color: #535353;
    position:relative;
    top: 20px;
`

const Contents = styled.p`
    font-size: 19px;
    font-weight: 300;
`


function Home(){
    return ( 
        <Main>
            <Title>
                <TitleName>JI HYE WON</TitleName>
                <TitlePosition>Frontend Developer, Web Publisher</TitlePosition>
            </Title>
            <Profile>
                <Image src={ProfileImg}></Image>
                <ContentsContainer>
                    <Greet >안녕하세요.</Greet><br/>
                    <ReactTypingEffect
                        speed={70}
                        eraseSpeed={70}
                        eraseDelay={600}
                        typingDelay={600}
                        text={[
                            "함께 성장하고자 하는 개발자의 문화를 사랑하고, 탐구하는것을 즐기는 늦바람난 개발자입니다.", 
                            "‘지금 이순간 춤을 춰라'라는 말을 좋아하며, 근성과 도전정신으로 끊임없이 성장하고자 합니다.",
                            "트렌드를 받아들이고 적용해보며 새로운 변화에 적응하는 개발자가 되고싶습니다."]}
                        displayTextRenderer={(text, i) => {
                            return (
                                <Contents>
                                    {text}
                                </Contents>
                              );
                            }} 
                    />
                </ContentsContainer>
            </Profile>
        </Main>
    )
}

export default Home;
