import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Link } from 'react-router-dom';

// 타자기 효과를 위한 애니메이션 정의
const typing = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const typingAnimation = (textLength, delay) => css`
  ${typing} ${textLength / 10}s steps(${textLength}, end) ${delay} forwards;
`;

const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StoryDiv = styled.div`
  color: white;
  font-size: 18px;
  text-align: center;
  margin-bottom: 30px;
  line-height: 1.5;
`;

const Line = styled.div`
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  width: ${(props) => (props.isVisible ? 'auto' : '0')};
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  ${(props) =>
    props.isVisible && typingAnimation(props.textLength, props.delay)}
`;

const SelectButton = styled(Link)`
  width: 150px;
  height: 40px;
  margin: 20px 10px;
  color: black;
  font-size: 15px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: black;
  border-radius: 5px;
`;

const OfficeDescription = () => {
  const [visibleLine, setVisibleLine] = useState(0);

  useEffect(() => {
    const delays = [0, 2000, 4000, 6000]; // 각 줄의 지연 시간

    delays.forEach((delay, index) => {
      setTimeout(() => {
        setVisibleLine(index + 1);
      }, delay);
    });
  }, []);

  const lines = [
    '웅치 전투! 여기서 일본군을 막아야 한다.',
    '일본의 군사가 100명이라면 10명도 안 되는 군사를',
    '이끌며 싸우고 있는 김제군수 정담 장군! ',
    '정담장군을 도와 일본군을 무찔러주세요!',
  ];

  return (
    <Container>
      <StoryDiv>
        {lines.map((line, index) => (
          <React.Fragment key={index}>
            <Line
              isVisible={visibleLine >= index + 1}
              delay={`${index}s`}
              textLength={line.length}
            >
              {line}
            </Line>
            <br />
          </React.Fragment>
        ))}
      </StoryDiv>
      <SelectButton to="/GoToOffice">이전</SelectButton>
      <SelectButton to="/OfficeGame1">미션 보기</SelectButton>
    </Container>
  );
};

export default OfficeDescription;
