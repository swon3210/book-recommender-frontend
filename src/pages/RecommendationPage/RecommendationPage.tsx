import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Card, Button, ButtonGroup } from "react-uikit-ward";

type RecommendationPageProps = {};

// Dummy Data

const cardListItems = [
  {
    title: "거시경제학",
    author: "황종휴",
    ISBN: "1322314",
    publisher: "국립외교원",
    publishedDate: "2019-11-02",
    callNumber: "352.33 ㅇ 213 ㅅ",
  },
  {
    title: "미시경제학",
    author: "황종휴",
    ISBN: "1322314",
    publisher: "국립외교원",
    publishedDate: "2019-11-02",
    callNumber: "352.33 ㅇ 213 ㅅ",
  },
  {
    title: "거시경제학",
    author: "황종휴",
    ISBN: "1322314",
    publisher: "국립외교원",
    publishedDate: "2019-11-02",
    callNumber: "352.33 ㅇ 213 ㅅ",
  },
  {
    title: "미시경제학",
    author: "황종휴",
    ISBN: "1322314",
    publisher: "국립외교원",
    publishedDate: "2019-11-02",
    callNumber: "352.33 ㅇ 213 ㅅ",
  },
  {
    title: "거시경제학",
    author: "황종휴",
    ISBN: "1322314",
    publisher: "국립외교원",
    publishedDate: "2019-11-02",
    callNumber: "352.33 ㅇ 213 ㅅ",
  },
  {
    title: "거시경제학",
    author: "황종휴",
    ISBN: "1322314",
    publisher: "국립외교원",
    publishedDate: "2019-11-02",
    callNumber: "352.33 ㅇ 213 ㅅ",
  },
  {
    title: "거시경제학",
    author: "황종휴",
    ISBN: "1322314",
    publisher: "국립외교원",
    publishedDate: "2019-11-02",
    callNumber: "352.33 ㅇ 213 ㅅ",
  },
  {
    title: "거시경제학",
    author: "황종휴",
    ISBN: "1322314",
    publisher: "국립외교원",
    publishedDate: "2019-11-02",
    callNumber: "352.33 ㅇ 213 ㅅ",
  },
  {
    title: "거시경제학",
    author: "황종휴",
    ISBN: "1322314",
    publisher: "국립외교원",
    publishedDate: "2019-11-02",
    callNumber: "352.33 ㅇ 213 ㅅ",
  },
];

const RecommendationPageWrapper = styled.div`
  padding: 30px;
  .buttons {
    margin-top: 100px;
    button {
      font-size: 14px;
    }
  }
`;

const cardItemList = cardListItems.map((item) => {
  return (
    <Card
      className="recommendations"
      backgroundColor="white"
      elevation="1"
      title={`${item.title} - 저자 : ${item.author}`}
    >
      <h1></h1>
      <p>출판사 : {item.publisher}</p>
      <p>출판일 : {item.publishedDate}</p>
      <p>청구기호 : {item.callNumber}</p>
    </Card>
  );
});

const CardItemListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;

  .recommendations {
    h1 {
      font-size: 18px;
    }
    h2 {
      font-size: 15px;
    }
  }
`;

const RecommendationPage = ({}: RecommendationPageProps) => {
  return (
    <RecommendationPageWrapper>
      <CardItemListWrapper>{cardItemList}</CardItemListWrapper>
      <ButtonGroup className="buttons" gap="10px" rightAlign>
        <Button>알고리즘 정보</Button>
        <Button>평가하기</Button>
      </ButtonGroup>
    </RecommendationPageWrapper>
  );
};

export default RecommendationPage;
