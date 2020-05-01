import React from "react";
import styled from "styled-components";
import { Card, Input, Button, ButtonGroup } from 'react-uikit-ward';

type EvaluationPageProps = {
  
};

const EvaluationPageWrapper = styled.div`
  display: flex;
  padding: 30px;
  flex-direction: column;
  ._card__header {
    display: none;
  }
  .question-item {
    margin-bottom: 30px;
    .item-label {
      margin-left: 10px;
      margin-bottom: 20px;
    }
  }
`;

const questionItems = [
  { example: "질문 예시", question: "원하는 책은 몇권 있었나요?"},
  { example: "4.5 / 5", question: "추천 서비스에 대한 만족도를 적어주세요"},
  { example: "질문 예시", question: "원하는 책은 몇권 있었나요?"},
  { example: "질문 예시", question: "원하는 책은 몇권 있었나요?"},
  { example: "질문 예시", question: "원하는 책은 몇권 있었나요?"},
  { example: "질문 예시", question: "원하는 책은 몇권 있었나요?"},
]

const questionItemList = questionItems.map(item => {
  return <Card
    className="question-item"
    backgroundColor="white"
  >
    <h5 className="item-label">{item.question}</h5>
    <Input inputType="text" width="100%" inputPlaceHolder={item.example}/>
  </Card>
})

const EvaluationPage = ({}: EvaluationPageProps) => {
  return (
    <EvaluationPageWrapper>
      {questionItemList}
      <ButtonGroup className="buttons" gap="10px" rightAlign>
        <Button>돌아가기</Button>
        <Button>평가 완료</Button>
      </ButtonGroup>
    </EvaluationPageWrapper>
  );
};

export default EvaluationPage;
