import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import styled from 'styled-components';

const ScannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: black;
`;

const QRScanner = ({ onScanSuccess }) => {
  const [scanResult, setScanResult] = useState(null);

  const handleScan = (data) => {
    if (data) {
      setScanResult(data);
      onScanSuccess(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <ScannerContainer>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            handleScan(result?.text);
          }

          if (!!error) {
            handleError(error);
          }
        }}
        style={{ width: '100%' }}
        constraints={{ facingMode: 'environment' }} // 후면 카메라 사용
      />
      {scanResult && <p>Scanned Result: {scanResult}</p>}
    </ScannerContainer>
  );
};

export default QRScanner;
