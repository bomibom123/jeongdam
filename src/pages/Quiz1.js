import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Quiz1() {
  const navigate = useNavigate();

  const handleAnswer = (answer) => {
    if (answer === 1) {
      alert('정답입니다!');
      navigate('/Quiz2');
    } else {
      alert('오답입니다.');
    }
  };

  return (
    <Container>
      <Quiz>
        문제1. 우리가 함께한 이 전투의 이름은?
        <QuizFlex>
          <Button onClick={() => handleAnswer(1)}>1. 웅치 전투</Button>
          <br />
          <Button onClick={() => handleAnswer(2)}>2. 곰치 전투</Button>
          <br />
          <Button onClick={() => handleAnswer(3)}>3. 가물치 전투</Button>
          <br />
          <Button onClick={() => handleAnswer(4)}>4. 갈치 전투</Button>
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
