import React from 'react';

import styled from 'styled-components';

import { Link } from 'react-router-dom';

import Github from '../Images/Favicon/Github.png';

import WWW from '../Images/Favicon/WWW.jpg';

import MS from '../Images/Favicon/MS.png';

import Repl from '../Images/Favicon/Repl.png';

import Reddit from '../Images/Favicon/Reddit.png';

import JobSearch from '../Images/Favicon/JobSearch.png';


const Main = styled.div`
  width: 100vw;
  height: auto;
  padding: 0 100px;
`
const List = styled.ul``
const Project = styled.li`
    display: flex;
    margin-bottom: 120px;
`
const Image = styled.div`
    width:50%;
    height: 70vh;
    border: solid 1px red;
`
const Content = styled.div`
    padding: 30px 30px;
    width:50%;
    height: 70vh;
    background: #F2F2F2;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    overflow: scroll;
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
                    <Image></Image>
                    <Content>
                        <Title>WWW(Word-Wide-Weather)</Title>
                        <Discription>
                            <ET>전세계 수도</ET>의 <ET>현재 날씨</ET>를 불러오는 페이지입니다.<br/>
                            수도를 검색하면 해당 수도의 현재날씨를 불러오고 날씨 카드를 추가할 수 있습니다.<br/>
                            추가된 날씨카드는 메인 페이지('/home')에서 볼 수 있습니다.<br/>
                            <br/>
                            Geolocation API와 OpenWeatherMap API를 통해<br/> 
                            현재 위치와 검색한 도시의 위치를 불러옵니다.<br/>
                            UseContext, CreateContext, Dispatch로 날씨카드 상태를 관리합니다.<br/>
                            NodeJS와 MongoDB, express, body-pharser의 패키지를 사용했으며,<br/> 
                            로컬에서 회원가입과 로그인이 가능하도록 구현했습니다.<br/>
                        </Discription>
                        <TechStack>
                            <Tag>Reactjs</Tag>
                            <Tag>React Hook</Tag>
                            <Tag>Redux</Tag>
                            <Tag>webpack</Tag>
                            <Tag>Axios</Tag>
                        </TechStack>
                        <UrlContainer>
                            <UrlList>
                                <UrlIcon src={WWW}></UrlIcon>
                                <Url href='https://hyewonji.github.io/project-react-hyewonji/#/home'>https://hyewonji.github.io/project-react-hyewonji/#/home</Url>
                            </UrlList>
                            <UrlList>
                                <UrlIcon src={Github}></UrlIcon>
                                <Url href='https://github.com/hyewonji/project-react-hyewonji'>https://github.com/hyewonji/project-react-hyewonji</Url>
                            </UrlList>
                        </UrlContainer>
                    </Content>
                </Project>
                <Project>
                    <Image></Image>
                    <Content>
                        <Title>Movie Docker</Title>
                        <Discription>
                            <ET>영화와 TV Show의 정보를 제공</ET>해주는 페이지입니다.<br/>
                            상영중, 개봉예정, 인기있는 영화를 카테고리별로 보여줍니다.<br/>
                            순위권, 인기있는, 방영중인 Show를 카테고리별로 보여줍니다.<br></br>
                            영화 혹은 TV Show의 이미지 클릭시, 상세정보를 불러옵니다.<br/>
                            검색기능을 구현했습니다.<br/>
                            <br/>
                            TMDB API를 사용해 원하는 정보를 불러왔습니다.<br/>
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
                                <Url href='https://hyewonji.github.io/nomflix'>https://hyewonji.github.io/nomflix</Url>
                            </UrlList>
                            <UrlList>
                                <UrlIcon src={Github}></UrlIcon>
                                <Url href='https://github.com/hyewonji/nomflix'>https://github.com/hyewonji/nomflix</Url>
                            </UrlList>
                        </UrlContainer>
                    </Content>
                </Project>
                <Project>
                    <Image></Image>
                    <Content>
                        <Title>Purple TodoList</Title>
                        <Discription>
                            할일을 정리하고 상태를 체크할 수 있는 <ET>심플한 투두 리스트</ET> 웹 앱 입니다.<br/>
                            할일을 추가, 삭제, 완료상태로 변경을 할 수 있습니다.<br/>
                            모든 리스트 완료, 취소, 삭제를 할 수 있습니다.<br/>
                            Reloading 시에 페이지를 나가기 전 할일 리스트상태를 그대로 받아옵니다.<br/>
                            현재 날짜, 시간, 날씨를 보여줍니다.<br/>
                            날씨 아이콘에 마우스 커서를 올리면 날씨 상세정보를 보여줍니다<br/>
                            <br/>
                            Geolocation API와 OpenWeatherMap API를 사용해<br/> 
                            현재 위치로 날씨를 받아옵니다.<br/>
                            Map, Filter, ForEach의 함수로 투두 리스트가 담긴 배열을 관리합니다.<br/>
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
                    <Image></Image>
                    <Content>
                        <Title>Search Recruitment</Title>
                        <Discription>
                            <ET>전세계 수도</ET>의 <ET>현재 날씨</ET>를 불러오는 페이지입니다.<br/>
                            수도를 검색하면 해당 수도의 현재날씨를 불러오고 날씨 카드를 추가할 수 있습니다.<br/>
                            추가된 날씨카드는 메인 페이지('/home')에서 볼 수 있습니다.<br/>
                            <br/>
                            Geolocation API와 OpenWeatherMap API를 통해<br/> 
                            현재 위치와 검색한 도시의 위치를 불러옵니다.<br/>
                            UseContext, CreateContext, Dispatch로 날씨카드 상태를 관리합니다.<br/>
                            NodeJS와 MongoDB, express, body-pharser의 패키지를 사용했으며,<br/> 
                            로컬에서 회원가입과 로그인이 가능하도록 구현했습니다.<br/>
                        </Discription>
                        <TechStack>
                            <Tag>Reactjs</Tag>
                            <Tag>React Hook</Tag>
                            <Tag>Redux</Tag>
                            <Tag>webpack</Tag>
                            <Tag>Axios</Tag>
                        </TechStack>
                        <UrlContainer>
                            <UrlList>
                                <UrlIcon src={JobSearch}></UrlIcon>
                                <Url href='https://sub-reddits.hyewonji.repl.co/'>https://sub-reddits.hyewonji.repl.co/</Url>
                            </UrlList>
                            <UrlList>
                                <UrlIcon src={Repl}></UrlIcon>
                                <Url href='https://replit.com/@hyewonji/Sub-Reddits#main.py'>https://replit.com/@hyewonji/Sub-Reddits#main.py</Url>
                            </UrlList>
                        </UrlContainer>
                    </Content>
                </Project>
                <Project>
                    <Image></Image>
                    <Content>
                        <Title>Sub Raddit</Title>
                        <Discription>
                            <ET>전세계 수도</ET>의 <ET>현재 날씨</ET>를 불러오는 페이지입니다.<br/>
                            수도를 검색하면 해당 수도의 현재날씨를 불러오고 날씨 카드를 추가할 수 있습니다.<br/>
                            추가된 날씨카드는 메인 페이지('/home')에서 볼 수 있습니다.<br/>
                            <br/>
                            Geolocation API와 OpenWeatherMap API를 통해<br/> 
                            현재 위치와 검색한 도시의 위치를 불러옵니다.<br/>
                            UseContext, CreateContext, Dispatch로 날씨카드 상태를 관리합니다.<br/>
                            NodeJS와 MongoDB, express, body-pharser의 패키지를 사용했으며,<br/> 
                            로컬에서 회원가입과 로그인이 가능하도록 구현했습니다.<br/>
                        </Discription>
                        <TechStack>
                            <Tag>Reactjs</Tag>
                            <Tag>React Hook</Tag>
                            <Tag>Redux</Tag>
                            <Tag>webpack</Tag>
                            <Tag>Axios</Tag>
                        </TechStack>
                        <UrlContainer>
                            <UrlList>
                                <UrlIcon src={Reddit}></UrlIcon>
                                <Url href='https://sub-reddits.hyewonji.repl.co/'>https://sub-reddits.hyewonji.repl.co/</Url>
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
