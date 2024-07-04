import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Container>
      <GameName>
        웅치 전투의 영웅!
        <br />
        정담 장군과 함께 조선을 지켜라
      </GameName>

      <SelectButton to="/GoToMarket">시장으로 가기</SelectButton>
      <SelectButton to="/UseScan">스캐너 작동 확인</SelectButton>
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

const GameName = styled.div`
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
