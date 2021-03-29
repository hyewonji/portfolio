import React from 'react';

import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';

import Timeline from '@material-ui/lab/Timeline';

import TimelineItem from '@material-ui/lab/TimelineItem';

import TimelineSeparator from '@material-ui/lab/TimelineSeparator';

import TimelineConnector from '@material-ui/lab/TimelineConnector';

import TimelineContent from '@material-ui/lab/TimelineContent';

import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';

import TimelineDot from '@material-ui/lab/TimelineDot';

import Paper from '@material-ui/core/Paper';

import Typography from '@material-ui/core/Typography';

const ContentsContainer = styled.div`
    width: 70vw;

`

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '70%',
    padding: '16px 26px',
    marginBottom: '50px'
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const PaperItem = styled.div`
  margin-top: 20px;
`

export default function AboutContainer() {
  const classes = useStyles();

  return (
    <>
      <Timeline align="left" className={classes.timeline}>
        <TimelineItem className={classes.timelineItem}>
          <TimelineOppositeContent className={classes.typography}>
            <Typography variant="body2" color="textSecondary">
              Who am i?
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Frontend Developer
              </Typography>
              <Typography>
                함께 성장하고자 하는 개발자의 문화를 사랑하고, 탐구하는것을 즐기는 늦바람난 개발자입니다.
                항상 열린 마음으로 새로운 기술을 받아들이려는 자세를 가지고 있으며, 책임감이 강해 항상 맡은바 최선을 다합니다.
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem  className={classes.timelineItem}>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              What am i dogin?
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <PaperItem>
                <Typography variant="h6" component="h1">
                  1일 1커밋
                </Typography>
                <Typography>
                  Github에 매일 1일 1커밋을 실천하며 꾸준히 코딩을 하고 있습니다.
                  꾸준히 노력하고 앞으로 나아가는 개발하는 개발자가 되고싶다는 꿈을 꾸고 있습니다.
                  1일 1커밋은 이를 실천하고 잘 보여줄 수 있는 수단이라고 생각해 매일 1커밋 이상을 push하고 있습니다. 
                </Typography>
              </PaperItem>
              <PaperItem>
                <Typography variant="h6" component="h1">
                  협업 프로젝트 스터디
                </Typography>
                <Typography>
                  스터디를 통해 백앤드 개발자와, 프론트엔드 개발자와 협업하여 프로젝트를 진행하고 있습니다. 
                  협업을 하며 커뮤니케이션 능력을 기르고 있고, 협업에 필요한 Live Share, Discord등을 적극 활용하고 있습니다.
                </Typography>
              </PaperItem>
              <PaperItem>           
                <Typography variant="h6" component="h1">
                  CS 공부
                </Typography>
                <Typography>Because it&apos;s awesome!</Typography>
              </PaperItem>
              <PaperItem>
                <Typography variant="h6" component="h1">
                  책
                </Typography>
                <Typography>
                  - 행복한 프로그래밍 
                  - 비전공자를 위한 It ,,, 
                  - 커리어 스킬
                  - 파이썬 알고리즘 인터뷰
                </Typography>
              </PaperItem>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem  className={classes.timelineItem}>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              Teck Stack
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <PaperItem>
                <Typography variant="h6" component="h1">
                  Frontend
                </Typography>
                <Typography>
                  - HTML
                  - CSS
                  - JavaScript
                  - React JS
                  - Redux
                </Typography>
              </PaperItem>
              <PaperItem>
                <Typography variant="h6" component="h1">
                  Backend
                </Typography>
                <Typography>
                  - Python
                  - NodeJS
                  - MongoDB
                </Typography>
              </PaperItem>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
}
