import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Link } from 'react-router-dom';

// 타자기 효과를 위한 애니메이션 정의
const typing = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const blink = keyframes`
  0% { border-right: 2px solid transparent; }
  100% { border-right: 2px solid white; }
`;

// 타자기 애니메이션과 지연 시간 설정
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
  font-size: 20px;
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
  transition: opacity 1s ease-in-out;
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

const HomeDescription = () => {
  const [visibleLine, setVisibleLine] = useState(0);

  useEffect(() => {
    const delays = [0, 2000, 4000, 6000, 8000, 10000]; // 각 줄의 지연 시간

    delays.forEach((delay, index) => {
      setTimeout(() => {
        setVisibleLine(index + 1);
      }, delay);
    });
  }, []);

  return (
    <Container>
      <StoryDiv>
        <Line isVisible={visibleLine >= 1} delay="0s" textLength={13}>
          지금 현재는 조선시대 1592년…
        </Line>
        <br />
        <Line isVisible={visibleLine >= 2} delay="1s" textLength={15}>
          일본이 부산을 통해 조선을 침략해
        </Line>
        <br />
        <Line isVisible={visibleLine >= 3} delay="2s" textLength={12}>
          임진왜란이 시작되었다.
        </Line>
        <br />
        <Line isVisible={visibleLine >= 4} delay="3s" textLength={20}>
          수도 한성(지금의 서울)을 점령하고 이제는
        </Line>
        <br />
        <Line isVisible={visibleLine >= 5} delay="4s" textLength={16}>
          전라도로 내려오고 있는 일본군들!
        </Line>
        <br />
        <Line isVisible={visibleLine >= 6} delay="5s" textLength={19}>
          정담 장군을 도와 조선을 구해주세요!!
        </Line>
      </StoryDiv>
      <SelectButton to="/">이전</SelectButton>
      <SelectButton to="/Char1">미션 시작하기</SelectButton>
    </Container>
  );
};

export default HomeDescription;
