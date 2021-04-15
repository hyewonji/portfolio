import React from 'react';

import styled from 'styled-components';

import Github from '../Images/About/Github.png';

import { StudyImageSlider, StudyImageSlider2, TechStackFrontend, TechStackBackend } from '../Components/AboutImageSlider';

import { fadein } from '../Components/Keyframe';

import FirstProblem1 from '../Images/About/FirstProblem1.png';

import FirstProblem2 from '../Images/About/FirstProblem2.png';

import FirstSolution1 from '../Images/About/FirstSolution1.png';

import FirstSolution2 from '../Images/About/FirstSolution2.png';

import { MdArrowForward } from "react-icons/md";


const BREAK_POINT_MOBILE = 768;

const Main = styled.main`
  width: 100vw;
  padding: 60px 11%;
  height: auto;
  animation: 2s ${fadein} ease-in-out;
  @media screen and (max-width: 768px){
  padding: 60px 5%;
  } 
`

const Line = styled.div`
  height: 480%;
  width: 1px;
  background: #a7a7a7;
  position: absolute;
  left: 21.5%;
  top: 160px;
  z-index: -10;
  @media screen and (max-width: 768px){
    display: none;
  }
`

const Dot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${props => props.color};
  margin-bottom: ${props => props.margin};
  position: relative;
  right: 10px;
  z-index:-9;
`

const Board = styled.div`
  
`

const List = styled.div`
  display: flex;
  align-items: flex-start;
  @media screen and (max-width: 768px){
    flex-direction: column;
  }
`

const ContentTitle = styled.div`
  font-size: 16px;
  width: 140px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px){
    background: ${props => props.color};
    padding: 10px 10px 5px 10px;
    border-radius: 5px;
    color: #9b90ff;
  }
`

const ContentContainer = styled.div`
`
const Content = styled.div`
  margin-left: 6%;
  @media screen and (max-width: 768px){
    margin-left: 0;
  }
`
const DiscriptionTitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 30px;
`
const DiscriptionContainer = styled.ul``

const DiscriptionDetail = styled.div`
  margin-bottom: 120px;
  @media screen and (max-width: 768px){  
    background: #F2F2F2;
    padding: 20px 25px;
  }

`

const SubTitle = styled.h4`
  font-weight: 400;
  font-size: 22px;
  margin-bottom: 20px;
`

const Discription = styled.li`
  line-height:1.5;
  font-size: 19px;
  font-weight: 100;
`

const ImageContainer = styled.div`
  width: 100%;
  margin-bottom: 30px;
`

const Image1 = styled.div`
  width: 100%;
  height: 18vw;
  background: url(${Github}) center center/cover no-repeat;
  margin-bottom: 50px;
`

const SubTitleProblem = styled.h4`
  font-weight: 400;
  font-size: 19px;
  margin-bottom: 10px;
`

const DiscriptionProblem = styled.li`
  line-height:1.5;
  font-size: 19px;
  font-weight: 100;
  margin-bottom: 30px;
`

const ProblemImageContainer = styled.div`
  width: 105%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px){
    flex-direction: column;
    width: 100%;
    margin-bottom: 30px;
  }
`

const ProblemImage = styled.div`
  width: 48%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px){
    width: 80%;
  }
`

const SIcon = styled(MdArrowForward)`
  margin: 5px; 
  font-size: 30px; 
  color: #0f3586;
  @media screen and (max-width: 768px){
    transform: rotate(90deg);
    margin-bottom: 15px;
  }
`

const ET = styled.span`
  font-weight: 400;
`

const ProblemImageList = styled.img`
  width: 33vw;
  @media screen and (max-width: 768px){
    width: 120%;
  }
`



function About(){

  return (
    <>
      <Main>
        <Line>
          <Dot color='#FFE59A' margin='575px'></Dot>
          <Dot color='#FFE59A' margin='1695px'></Dot>
          <Dot color='#9bdaff' margin='505px'></Dot>
          <Dot color='#9bdaff' margin='680px'></Dot>
        </Line>
        <Board>
          <List>
            <ContentTitle color='#FFE59A'>What am i doing?</ContentTitle>
            <ContentContainer>
              <Content>
                <DiscriptionDetail>
                  <DiscriptionTitle>Github 1일 1커밋</DiscriptionTitle>
                  <Image1 ></Image1>
                  <Discription>
                    <ET>'매일'</ET>, <ET>'꾸준히'</ET> 오래 개발을 하는것이 꿈입니다.<br/> 
                    이러한 개발자로서의 지향점을 <ET>습관</ET>으로 만들기 위해 1일 1커밋을 시작했습니다.<br/> 
                    약 6개월간 1일 1커밋을 실천하며 <ET>20개의 Repository</ET>를 생성했습니다.<br/>
                    <ET>Javascript</ET>, <ET>ReactJS</ET>, <ET>Python</ET>기반의 다양한 웹 프로젝트를 진행과정과, <ET>Redux</ET>, <ET>CS</ET> 등에 대해 공부한 자료들을 정리했습니다.<br/>
                  </Discription>
                </DiscriptionDetail> 
              </Content>
              <Content>
                <DiscriptionTitle>스터디</DiscriptionTitle>
                <DiscriptionContainer>
                  <DiscriptionDetail>
                    <SubTitle>Match Meal Project</SubTitle>
                    <ImageContainer>
                      <StudyImageSlider></StudyImageSlider>
                    </ImageContainer>
                    <Discription>
                      원거리에 있는 사람들의 <ET>중간지점</ET>을 찾아 <ET>맛집</ET>과 <ET>길찾기</ET>를 제공해주는 <ET>플랫폼 개발 프로젝트</ET>를 진행중입니다.<br/> 
                      <ET>Discord</ET>, VSC 패키지 <ET>LiveShare</ET>, <ET>Git</ET>을 사용해 소스코드를 <ET>공유</ET>하고 의논하고 있습니다.<br/>
                      <ET>ReactJS</ET>기반의 웹 페이지이며 스터디원 1명과 함께 <ET>프론트엔드 구현</ET>을 맡았습니다.<br/> 
                      로그인상태, 사용자의 위치, 입력된 위치값들의 중간지점 등의 상태를 저장하고 관리하기 위해<br/> <ET>Redux</ET>와 미들웨어 <ET>Redux-thunk</ET>를 사용했습니다.<br/> 
                      <ET>GeoLocation API</ET>를 사용해 사용자의 위치를 받아오고 <ET>Kakao Map API</ET>로 지도를 사용한 다양한 기능을 구현했습니다.<br/> 
                      개발자들과의 <ET>협업</ET>하며 <ET>Git</ET>을 사용해 소통하는 방법과, 개발과정에서의 <ET>커뮤니케이션 능력</ET>을 길렀습니다.<br/> 
                    </Discription>
                  </DiscriptionDetail>
                  <DiscriptionDetail>
                  <SubTitle>CS 공부 및 발표</SubTitle>
                  <ImageContainer>
                    <StudyImageSlider2></StudyImageSlider2>
                  </ImageContainer>
                  <Discription>
                    1주일에 한번씩, 1가지의 <ET>주제</ET>에 대해 깊게 공부하고 공부한 내용을 스터디 시간에 <ET>발표</ET>하며 <ET>공유</ET>하고 있습니다.<br/>
                    지금까지 <ET>HTTP</ET>, <ET>터미널</ET>, <ET>DOM</ET> 등 프로젝트를 진행하면서 공부의 필요성을 느낀 것들에 대해 공부했습니다<br/>
                    공부한것을 발표하고 공유하는 과정에서 <ET>지식을 체화</ET>할 수 있었고,<br/> 
                    스터디원이 제가 공부하지 않았던 부분을 공부했을 경우에는 <ET>새로운 지식</ET>을 접할 수 있어서<br/>
                    CS공부를 하는데 크게 도움이 되었습니다.<br/>
                  </Discription>
                </DiscriptionDetail>
                </DiscriptionContainer>
              </Content>
            </ContentContainer>
          </List>
          <List>
            <ContentTitle color='#9bdaff'>As a Developer!?</ContentTitle>
            <ContentContainer>
              <Content>
                <DiscriptionTitle>Tack Stack</DiscriptionTitle>

                <DiscriptionContainer style={{marginBottom:'180px'}}>
                  <SubTitle>Frontend</SubTitle>
                  <TechStackFrontend />
                  <DiscriptionDetail style={{padding: '0'}}></DiscriptionDetail>
                  <SubTitle>Backend</SubTitle>
                  <TechStackBackend/>
                </DiscriptionContainer>

              </Content>
              <Content>
                <DiscriptionTitle>문제 해결 능력</DiscriptionTitle>
                <DiscriptionContainer>
                  <DiscriptionDetail>
                    <ProblemImageContainer>
                      <ProblemImage>
                        <ProblemImageList src={FirstProblem1} alt=""></ProblemImageList>
                        <ProblemImageList src={FirstProblem2} alt=""></ProblemImageList>
                      </ProblemImage>
                      <SIcon />
                      <ProblemImage>
                        <ProblemImageList src={FirstSolution1} alt=""></ProblemImageList>
                        <ProblemImageList src={FirstSolution2} alt=""></ProblemImageList>
                      </ProblemImage>
                    </ProblemImageContainer>
                    <SubTitleProblem>Problems</SubTitleProblem>
                    <DiscriptionProblem>
                      Kakao Map API의 마커 제어하기 Sample을 이용해 사용자가 지정한 위치에 여러개의 마커를 표시 할 수 있습니다.<br/>
                      이를 이용해 한 개의 마커를 지도에서 이동시키고 마커를 놓은 지점의 위치를 얻고자 했습니다.<br/>
                      하지만 그에 해당하는 API Sample 혹은 이벤트 함수가 존재하지 않았습니다.
                    </DiscriptionProblem>
                    <SubTitleProblem>Solution</SubTitleProblem>
                    <DiscriptionProblem>
                      <ET>Kakao Map API Docs</ET>의 마커의 Method 'getPosition()'와 이벤트 속성을 이용하여 <ET>새로운 이벤트 함수를 생성</ET>했습니다.<br/>
                      마커 드래그앤 드롭시 마커의 위치를 가져오고 위치 저장하는 상태를 변경할 수 있게 수정했습니다.
                    </DiscriptionProblem>

                  {/*<SubTitleProblem>Problems 2</SubTitleProblem>
                  <DiscriptionProblem></DiscriptionProblem>
                  <SubTitleProblem>Problems 3</SubTitleProblem>
                  <DiscriptionProblem></DiscriptionProblem>*/}
                  </DiscriptionDetail>
                </DiscriptionContainer>
              </Content>
            </ContentContainer>
          </List>
        </Board>
      </Main>
    </>
  )
};

export default About;