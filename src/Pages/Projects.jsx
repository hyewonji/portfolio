import React from 'react';

import styled from 'styled-components';

import Github from '../Images/Favicon/Github.png';

import WWW from '../Images/Favicon/WWW.jpg';

import MS from '../Images/Favicon/MS.png';

import Repl from '../Images/Favicon/Repl.png';

import Reddit from '../Images/Favicon/Reddit.png';

import JobSearch from '../Images/Favicon/JobSearch.png';

import { fadein } from '../Components/Keyframe';

import { 
    WWWImgSlider, 
    MovieDockerImgSlider, 
    PurpleToDoListImageSlider, 
    SearchRecruitmentImageSlider, 
    SubRedditImageSlider } from '../Components/ProjectImageSlider';


const Main = styled.div`
    width: 100vw;
    height: auto;
    padding: 30px 100px;
    margin-top: 30px;
    animation: 2s ${fadein} ease-in-out;     
    @media screen and (max-width: 768px){
        padding: 30px 20px;
    }
`
const List = styled.ul``
const Project = styled.li`
    display: flex;
    margin-bottom: 120px;
    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`
const Image = styled.div`
    width: 48%;
    height: 70vh;
    border: solid 1px #ececec;
    border-right: none;
    @media screen and (max-width: 768px){  
        width: 100%;
        height: auto;
    }
`
const Content = styled.div`
    padding: 30px 30px;
    width: 50%;
    height: 70vh;
    background: #F2F2F2;
    display: flex;
    flex-direction: column;
    overflow: auto;
    &::-webkit-scrollbar{
        display:none;
    }
    @media screen and (max-width: 768px){  
        width: 100%;
        height: auto;
    }
`

const  Title = styled.h1`
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 25px;
`

const Discription = styled.div`
    width: 100%;
    font-weight: 300;
    font-size: 19px;
    margin-bottom: 30px;
    line-height:1.5;
`
const TechStack = styled.ul`
    display: flex;
    margin-bottom: 10px;
`
const Tag = styled.li`
    padding: 5px 10px;
    background: #6FAA55;
    color: white;
    border-radius: 5px;
    margin-right: 10px;
`
const UrlContainer = styled.ul``
const UrlList = styled.li`
    display: flex;
    align-items: center;
`
const UrlIcon = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 10px;
`

const Url = styled.a`
    font-weight:300;
`

const ET = styled.span`
  font-weight: 400;
  color: #3a3a3a;
`

function Projects(){
    return ( 
        <Main>
            <List>
                <Project>
                    <Image>
                        <WWWImgSlider />
                    </Image>
                    <Content>
                        <Title>WWW(Word-Wide-Weather)</Title>
                        <Discription>
                            <ET>전세계 수도</ET>의 <ET>현재 날씨</ET>를 불러오는 페이지입니다.<br/>
                            수도를 검색하면 해당 수도의 현재날씨를 불러오고 날씨 카드를 추가할 수 있습니다.<br/>
                            추가된 날씨카드는 메인 페이지('/home')에서 볼 수 있습니다.<br/>
                            <br/>
                            Geolocation API와 OpenWeatherMap API를 통해<br/> 
                            현재 위치의 날씨와 검색한 도시의 날씨를 불러옵니다.<br/>
                            State, Dispatch, useReducer로 회원정보를 관리하는 프론트엔드 버전과,<br/>
                            NodeJS와 MongoDB, express, body-pharser의 패키지를 사용해 <br/>
                            로그인, 회원가입을 기능을 하는 백앤드 버전을 구현했습니다.<br/>
                            (백앤드는 로컬에서 실행가능합니다.) 
                        </Discription>
                        <TechStack>
                            <Tag>ReactJS</Tag>
                            <Tag>React Hook</Tag>
                            <Tag>Axios</Tag>
                            <Tag>NodeJS</Tag>
                            <Tag>MongoDB</Tag>
                            <Tag>Express</Tag>
                        </TechStack>
                        <TechStack>
                        </TechStack>
                        <UrlContainer>
                            <UrlList>
                                <UrlIcon src={WWW}></UrlIcon>
                                <Url href='https://hyewonji.github.io/world-wide-weather/#/'>https://hyewonji.github.io/world-wide-weather/#/</Url>
                            </UrlList>
                            <UrlList>
                                <UrlIcon src={Github}></UrlIcon>
                                <Url href='https://github.com/hyewonji/world-wide-weather/tree/feature/login-frontend'>https://github.com/hyewonji/world-wide-weather/tree/feature/login-frontend</Url>
                            </UrlList>
                        </UrlContainer>
                    </Content>
                </Project>
                <Project>
                    <Image>
                        <MovieDockerImgSlider/>
                    </Image>
                    <Content>
                        <Title>Movie Docker</Title>
                        <Discription>
                            <ET>영화와 TV Show의 정보를 제공</ET>해주는 페이지입니다.<br/>
                            상영중, 개봉예정, 인기있는 영화를 카테고리별로 보여줍니다.<br/>
                            순위권, 인기있는, 방영중인 Show를 카테고리별로 보여줍니다.<br></br>
                            영화 혹은 TV Show의 이미지 클릭시, 상세정보를 불러옵니다.<br/>
                            찾고자하는 영화나 TV Show를 검색할 수 있습니다.<br/>
                            <br/>
                            TMDB API에서 정보를 불러왔습니다.<br/>
                            React Hook을 사용해 Loading시 Loading 창을 보이게 했습니다.<br/>
                            프로젝트를 진행하며 Class Component와 Function Conponent를 모두 사용해보았습니다.<br/> 
                            두 가지 방법의 차이점과 각각의 장단점에대해 알 수 있었고 React 컴포넌트를 사용하는 방법을 익혔습니다.<br/>
                        </Discription>
                        <TechStack>
                            <Tag>Reactjs</Tag>
                            <Tag>React Hook</Tag>
                            <Tag>webpack</Tag>
                            <Tag>Axios</Tag>
                        </TechStack>
                        <UrlContainer>
                            <UrlList>
                                <UrlIcon src={MS}></UrlIcon>
                                <Url href='https://hyewonji.github.io/moviedocker'>https://hyewonji.github.io/moviedocker</Url>
                            </UrlList>
                            <UrlList>
                                <UrlIcon src={Github}></UrlIcon>
                                <Url href='https://github.com/hyewonji/moviedocker'>https://github.com/hyewonji/moviedocker</Url>
                            </UrlList>
                        </UrlContainer>
                    </Content>
                </Project>
                <Project>
                    <Image>
                        <PurpleToDoListImageSlider />
                    </Image>
                    <Content>
                        <Title>Purple TodoList</Title>
                        <Discription>
                            할일 리스트를 추가하고 상태를 체크할 수 있는 <ET>심플한 투두 리스트</ET> 웹 앱 입니다.<br/>
                            할일을 추가, 삭제, 완료상태로 변경을 할 수 있습니다.<br/>
                            리스트 일괄 완료, 취소, 삭제를 할 수 있습니다.<br/>
                            Reloading 시에 페이지를 나가기 전 저장된 할일 리스트를 그대로 받아옵니다.<br/>
                            현재 날짜, 시간, 날씨를 보여줍니다.<br/>
                            날씨 아이콘에 마우스 커서를 올리면 날씨 상세정보를 보여줍니다<br/>
                            <br/>
                            Geolocation API와 OpenWeatherMap API를 사용해<br/> 
                            현재 위치로 날씨를 받아옵니다.<br/>
                            Map, Filter, ForEach의 함수로 상태변화시 투두 리스트가 담긴 배열을 관리합니다.<br/>
                            투드리스트의 정보와 위치정보는 LocalStorage에 저장해 관리햐며,<br/>
                            페이지가 Reload될 때 저장된 정보를 다시 불러옵니다.<br/>
                        </Discription>
                        <TechStack>
                            <Tag>Vanilla JS</Tag>
                            <Tag>Html</Tag>
                            <Tag>CSS</Tag>
                            <Tag>Fetch</Tag>
                            <Tag>LocalStorage</Tag>
                        </TechStack>
                        <UrlContainer>
                            <UrlList>
                                <UrlIcon src='https://static.thenounproject.com/png/1081963-200.png'></UrlIcon>
                                <Url href='https://hyewonji.github.io/JavaScript_ToDoList'>https://hyewonji.github.io/JavaScript_ToDoList/blob</Url>
                            </UrlList>
                            <UrlList>
                                <UrlIcon src={Github}></UrlIcon>
                                <Url href='https://github.com/hyewonji/JavaScript_ToDoList'>https://github.com/hyewonji/JavaScript_ToDoList</Url>
                            </UrlList>
                        </UrlContainer>
                    </Content>
                </Project>
                <Project>
                    <Image>
                        <SearchRecruitmentImageSlider />
                    </Image>
                    <Content>
                        <Title>Search Recruitment</Title>
                        <Discription>
                            <ET>3개의 사이트</ET>(Remote OK, Stack Overflow, We Work Remotely)에서<br/> 
                            <ET>구직공고를 스크래핑해서 한 페이지에 보여주는 웹 페이지</ET> 입니다.<br/>
                            구직관련 키워드를 입력후 제출하면 각각의 페이지에서 관련 구직공고를 스크래핑해서 화면에 보여줍니다.<br/>
                            해당 구직공고 링크를 제공하고, 검색한 구직공고를 CSV 파일로 내려받는 기능을 제공합니다.<br/>
                            <br/>
                            request, BeautifulSoup로 구직사이트의 url을 사용해 html정보를 가져옵니다.<br/>
                            이때, URL Parmeter을 이용해 정보를 얻어올 페이지에 접근합니다.<br/>
                            html의 Class 이름과 Tag 이름을 이용해 공고 제목, 회사이름, 지원링크를 가져옵니다.<br/>
                            Export to CSV 버튼 클릭시, 불러온 모든 정보를 CSV 파일로 보여주며, 다운받을수 있습니다.<br/>
                            한번 검색한 키워드는 Fack DB 배열안에 저장되어 있어 재검색을 할 경우 시간소요가 되지 않습니다.<br/>
                        </Discription>
                        <TechStack>
                            <Tag>Python</Tag>
                            <Tag>Flask</Tag>
                            <Tag>BeautifulSoup</Tag>
                            <Tag>Render Template</Tag>
                            <Tag>HTML</Tag>
                            <Tag>CSS</Tag>
                        </TechStack>
                        <UrlContainer>
                            <UrlList>
                                <UrlIcon src={JobSearch}></UrlIcon>
                                <Url href='https://SearchRecruitment.hyewonji.repl.co'>https://SearchRecruitment.hyewonji.repl.co</Url>
                            </UrlList>
                            <UrlList>
                                <UrlIcon src={Repl}></UrlIcon>
                                <Url href='https://replit.com/@hyewonji/SearchRecruitment#main.py'>https://replit.com/@hyewonji/SearchRecruitment#main.py</Url>
                            </UrlList>
                        </UrlContainer>
                    </Content>
                </Project>
                <Project>
                    <Image>
                        <SubRedditImageSlider />
                    </Image>
                    <Content>
                        <Title>Sub Reddit</Title>
                        <Discription>
                            <ET>미국의 소셜 뉴스 초대형 커뮤니티 Reddit</ET>에서 포스트를 <ET>스크래핑</ET> 하는 페이지입니다.<br/>
                            체크박스로 원하는 개발 키워드를 체크하고 제출합니다.<br/>
                            새로운 페이지에서 체크된 키워드의 정보를 upvote 수의 내림차순으로 정렬해서 화면에 보여줍니다.<br/>
                            <br/>
                            requests, BeautifulSoup로 Reddit 페이지의 url을 사용해 html정보를 가져옵니다.<br/>
                            flask 모듈의 request로 home.html의 체크박스가 체크된 input의 value를 불러옵니다.
                            flask 모듈의 Flask, render_template로 Reddit에서 불러온 정보를 웹 페이지에 정렬해서 보여줍니다.
                            html에서 for문을 사용해 짧은 코드로 반복작업을 할 수 있게 했습니다.
                        </Discription>
                        <TechStack>
                            <Tag>Python</Tag>
                            <Tag>Flask</Tag>
                            <Tag>BeautifulSoup</Tag>
                            <Tag>Render Template</Tag>
                            <Tag>HTML</Tag>
                            <Tag>CSS</Tag>
                        </TechStack>
                        <UrlContainer>
                            <UrlList>
                                <UrlIcon src={Reddit}></UrlIcon>
                                <Url href='https://sub-reddits.hyewonji.repl.co/'>https://sub-reddits.hyewonji.repl.co</Url>
                            </UrlList>
                            <UrlList>
                                <UrlIcon src={Repl}></UrlIcon>
                                <Url href='https://replit.com/@hyewonji/Sub-Reddits#main.py'>https://replit.com/@hyewonji/Sub-Reddits#main.py</Url>
                            </UrlList>
                        </UrlContainer>
                    </Content>
                </Project>
            </List>
        </Main>
    )
}

export default Projects;
