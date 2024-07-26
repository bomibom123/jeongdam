import React from 'react';
import styled from 'styled-components';
import char from '../assets/char3.png';
import { Link } from 'react-router-dom';

const Char3 = () => {
  return (
    <Container>
      <TitleDiv>나의 캐릭터 확인</TitleDiv>
      <CharDiv src={char} alt="캐릭터 이미지"></CharDiv>
      <ContentDiv>모든 아이템 획득 완료</ContentDiv>
      <SelectButton to="/Quiz1">퀴즈 풀기</SelectButton>
    </Container>
  );
};

const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleDiv = styled.div`
  color: white;
  font-size: 30px;
  text-align: center;
  margin-bottom: 30px;
`;
const CharDiv = styled.img`
  width: 90vw;
  margin-bottom: 20px;
`;
const ContentDiv = styled.div`
  color: white;
  font-size: 15px;
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

export default Char3;
