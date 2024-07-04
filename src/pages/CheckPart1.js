import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';

export default function CheckPart1() {
  return (
    <Container>
      <GameName>QR 확인 파트</GameName>

      <SelectButton to="/MarketGame2">이건 아마 필요 없어질..</SelectButton>
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
