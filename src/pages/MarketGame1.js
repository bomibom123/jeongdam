import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';

export default function MarketGame1() {
  return (
    <Container>
      <GameName>
        정확한 양의 감자를 옮겨
        <br />
        식량을 보호하라!
      </GameName>

      <SelectButton to="/QRScanner">미션 달성 직원 확인</SelectButton>
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
  margin-bottom: 30px;
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
