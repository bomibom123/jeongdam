import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Certification() {
  return (
    <Container>
      <GameName>장군상 이미지 제작 및 첨부</GameName>

      <SelectButton to="/GoToReturn">출발 장소로 돌아가기</SelectButton>
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
