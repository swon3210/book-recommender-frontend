import React from "react";
import styled from "styled-components";
import { Card, Form, Input, Button, ButtonGroup } from "react-uikit-ward";
import { Link } from "react-router-dom";

type IntroPageProps = {
  
};

const IntroPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 88%;
  padding: 20px 30px;

  .intro-form {
    .form-header {
      margin: 0;
    }
  }

  ._card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
      text-align: center;
    }
  }
`;

const introFormBody = (
  <>
  </>
);

const introFormFooter = (
  <ButtonGroup>
    <Button>실행</Button>
    {/* <Button theme="secondary">
      <Link to="/account/register">회원가입</Link>
    </Button> */}
  </ButtonGroup>
);

const IntroPage = ({}: IntroPageProps) => {
  return (
    <IntroPageWrapper>
      <Card
        backgroundColor="white"
        elevation="1"
        width="60%"
        height="80%"
        padding="50px"
      >
        <Form
          className="intro-form"
          title="도서 추천 서비스"
          subTitle={`대법원과 각급법원의 조직은 법률로 정한다. 저작자·발명가·과학기술자와 예술가의 권리는 법률로써 보호한다. 국가는 농지에 관하여 경자유전의 원칙이 달성될 수 있도록 노력하여야 하며, 농지의 소작제도는 금지된다.
          법관은 탄핵 또는 금고 이상의 형의 선고에 의하지 아니하고는 파면되지 아니하며, 징계처분에 의하지 아니하고는 정직·감봉 기타 불리한 처분을 받지 아니한다.`}
          bodyElements={introFormBody}
          footerElements={introFormFooter}
        ></Form>
      </Card>
    </IntroPageWrapper>
  );
};

export default IntroPage;
