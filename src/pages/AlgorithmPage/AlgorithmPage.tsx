import React from "react";
import styled from "styled-components";
import { Card, Form, ListItem } from "react-uikit-ward";

type AlgorithmPageProps = {};

const AlgorithmPageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  height: 80%;
  .description-card {
    width: 25%;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    height: 100%;
    .description-item {
      margin-top: 30px;
      box-shadow: 1px 2px 6px rgba(0,0,0,0.1);
    }
  }
`;

const AlgorithmPage = ({}: AlgorithmPageProps) => {
  return (
    <AlgorithmPageWrapper>
      <Card title="Input" backgroundColor="white" className="description-card">
        <ListItem theme="light" className="description-item">
          Input 1
        </ListItem>
        <ListItem theme="light" className="description-item">
          Input 2
        </ListItem>
        <ListItem theme="light" className="description-item">
          Input 3
        </ListItem>
      </Card>
      <Card
        title="Process"
        backgroundColor="white"
        className="description-card"
      >
        <ListItem theme="light" className="description-item">
          Process 1
        </ListItem>
        <ListItem theme="light" className="description-item">
          Process 2
        </ListItem>
      </Card>
      <Card
        title="Output"
        backgroundColor="white"
        className="description-card"
      >
        <ListItem theme="light" className="description-item">
          Output 1
        </ListItem>
        <ListItem theme="light" className="description-item">
          Output 2
        </ListItem>
        <ListItem theme="light" className="description-item">
          Output 3
        </ListItem>
      </Card>
    </AlgorithmPageWrapper>
  );
};

export default AlgorithmPage;
