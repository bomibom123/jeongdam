import styled, { keyframes } from 'styled-components';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import mapImage from '../assets/map.png';
import footPrintImage from '../assets/footprint3.png';

export default function GoToReturn() {
  const [visibleSteps, setVisibleSteps] = useState([]);

  useEffect(() => {
    footStepsPath.forEach((_, index) => {
      setTimeout(() => {
        setVisibleSteps((prev) => [...prev, index]);
      }, index * 300); // 0.2초 간격
    });
  }, []);

  return (
    <Container>
      <BigTitle>향교로 돌아가는 길</BigTitle>
      <MapContainer>
        {footStepsPath.map((point, index) => (
          <FootStep
            key={index}
            style={{ left: `${point.x}px`, top: `${point.y}px` }}
            visible={visibleSteps.includes(index)}
          />
        ))}
      </MapContainer>
      <SelectButton to="/Final">도착!</SelectButton>
    </Container>
  );
}

const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BigTitle = styled.div`
  color: white;
  font-size: 30px;
  text-align: center;
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

const generatePath = (start, end, steps) => {
  const path = [];
  const dx = (end.x - start.x) / steps;
  const dy = (end.y - start.y) / steps;

  for (let i = 0; i <= steps; i++) {
    const x = start.x + dx * i;
    const y = start.y + dy * i;
    path.push({ x, y });
  }

  return path;
};

// 예시 사용
const start = { x: 180, y: 150 };
const end = { x: 120, y: 100 };
const steps = 4;

const footStepsPath = generatePath(start, end, steps);

const MapContainer = styled.div`
  position: relative;
  width: 90vw;
  height: 60vw;
  background-image: url(${mapImage});
  background-size: cover;
`;

const FootStep = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  background-image: url(${footPrintImage});
  background-size: cover;
  transition: opacity 0.5s;
  opacity: ${(props) => (props.visible ? 1 : 0)};
`;
