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
  width: 170px;
  height: 60px;
  margin: 20px 10px;
  color: black;
  font-size: 15px;
  text-decoration: none;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: black;
  border-radius: 5px;
`;

const MarketDescription = () => {
  const [visibleLine, setVisibleLine] = useState(0);

  useEffect(() => {
    const delays = [0, 2000, 4000, 6000, 8000, 10000, 12000, 14000]; // 각 줄의 지연 시간

    delays.forEach((delay, index) => {
      setTimeout(() => {
        setVisibleLine(index + 1);
      }, delay);
    });
  }, []);

  const lines = [
    ' 정담 장군은 끝까지 적과 싸우다 웅치에서 죽는다. ',
    '“차라리 한 명의 적이라도 더 죽이고 죽을 것이다.',
    '살아서는 단 한 걸음도 물러서지 않으리.”',
    '비록 패배했지만 웅치 전투로 인해 일본군에게서',
    '식량창고 전라도를 지킬 수 있었다.',
    '식량을 지키고 일본군을 무찌른 여러분들은',
    '이제 나라를 구하는 장군이 되었습니다. ',
    '앞으로도 정담장군 같은 영웅이 되어주세요!',
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
      <SelectButton to="/Certification">
        용맹한 장군상 보여주고
        <br />
        상품 받기
      </SelectButton>
    </Container>
  );
};

export default MarketDescription;
