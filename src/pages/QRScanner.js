import React, { useState, useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { useNavigate } from 'react-router-dom';

const QRScanner = () => {
  const [scanResult, setScanResult] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const scanner = new Html5QrcodeScanner('reader', {
      qrbox: {
        width: 500,
        height: 500,
      },
      fps: 5,
    });

    scanner.render(success, error);

    function success(result) {
      scanner
        .clear()
        .then(() => {
          setScanResult(result);
        })
        .catch((err) => {
          console.error('Scanner clear error:', err);
        });
    }

    function error(err) {
      console.warn(err);
    }

    return () => {
      scanner.clear().catch((err) => {
        console.error('Scanner clear error on unmount:', err);
      });
    };
  }, []);

  useEffect(() => {
    if (scanResult) {
      if (scanResult === 'https://bit.ly/3WAdh5Z?r=qr') {
        navigate('/Char2');
      } else if (scanResult === 'https://bitly.com/s/qrc_preview.html') {
        navigate('/Char3');
      }
    }
  }, [scanResult, navigate]);

  return (
    <div>
      {scanResult ? (
        <div>
          Success: <a href={'http://' + scanResult}>{scanResult}</a>
        </div>
      ) : (
        <div
          style={{
            marginTop: '30px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            id="reader"
            className="reader"
            style={{ width: '90vw', height: '90vh' }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default QRScanner;
