import React from 'react';
import { useNavigate } from 'react-router-dom';
import QRScanner from './QRScanner';
import styled from 'styled-components';

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

const UseScan = () => {
  const navigate = useNavigate();

  const handleScanSuccess = (data) => {
    console.log('QR Code Scanned:', data);
    if (data === 'https://www.naver.com/') {
      navigate('/MarketQuiz2'); // QR 코드 스캔 후 MarketQuiz2 페이지로 이동
    }
  };

  return (
    <Container>
      <BigTitle>QR 코드 스캐너</BigTitle>
      <QRScanner onScanSuccess={handleScanSuccess} />
    </Container>
  );
};

export default UseScan;
