import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Quiz2() {
  const navigate = useNavigate();

  const handleAnswer = (answer) => {
    if (answer === 3) {
      alert('정답입니다!');
      navigate('/Certification');
    } else {
      alert('오답입니다.');
    }
  };

  return (
    <Container>
      <Quiz>
        문제2. 함께 전투에 나간 김제 군수 장군의 이름은?
        <QuizFlex>
          <Button onClick={() => handleAnswer(1)}>1. 정답 장군</Button>
          <br />
          <Button onClick={() => handleAnswer(2)}>2. 사담 장군</Button>
          <br />
          <Button onClick={() => handleAnswer(3)}>3. 정담 장군</Button>
          <br />
          <Button onClick={() => handleAnswer(4)}>4. 웅담 장군</Button>
        </QuizFlex>
      </Quiz>
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

const Quiz = styled.div`
  color: white;
  font-size: 20px;
  text-align: center;
  margin-bottom: 30px;
  line-height: 1.5;
`;

const Button = styled.button`
  width: 150px;
  height: 40px;
  margin: 10px;
  color: black;
  font-size: 15px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: black;
  border-radius: 5px;
  cursor: pointer;
`;

const QuizFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
