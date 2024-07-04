import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';

export default function OfficeGame2() {
  return (
    <Container>
      <GameName>게임 소개 블라블라</GameName>

      <SelectButton to="/CheckPart4">미션 달성 확인받기</SelectButton>
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
