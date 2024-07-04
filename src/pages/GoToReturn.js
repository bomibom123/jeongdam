import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import mapImageExport from '../assets/map.png';

export default function GoToReturn() {
  return (
    <Container>
      <BigTitle>향교로 돌아가는 길</BigTitle>
      <MapImage src={mapImageExport} alt="지도 이미지" />
      <SelectButton to="/Certification">도착!</SelectButton>
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

const MapImage = styled.img`
  max-width: 70vw;
  margin-top: 20px;
`;
