import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./HolyGrail.scss";

import { SideBar, ListItem, Icon, PageHeader } from "react-uikit-ward";

type HolyGrailProps = {
  children: React.ReactNode;
};

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  background-color: #eee;

  .side-bar {
    flex-shrink: 0;
  }
`;

const Main = styled.main`
  width: 100%;
`;

const HolyGrail = ({ children }: HolyGrailProps) => {
  const [layoutState, setLayoutState] = useState({
    sidebarToggle: true,
  });

  const sideBarToggleClickHandler = () => {
    const processed = { ...layoutState };
    processed.sidebarToggle = !processed.sidebarToggle;
    setLayoutState(processed);
  };

  const sideBarToggleButton = (
    <div style={{ cursor: "pointer" }} onClick={sideBarToggleClickHandler}>
      <Icon icon="menu"></Icon>
    </div>
  );

  const loginButton = (
    <Link to="/account/login">
      <Icon icon="customers"></Icon>
    </Link>
  );

  return (
    <Wrapper>
      <SideBar
        width="14rem"
        height="100vh"
        sticky={true}
        className="side-bar"
        toggled={layoutState.sidebarToggle}
        toggleAnimation="shrink"
      >
        <Link to="/" style={{ color: "white" }}>
          <ListItem border="none">서비스 소개</ListItem>
        </Link>
        <Link to="/algorithm" style={{ color: "white" }}>
          <ListItem border="none">알고리즘 소개</ListItem>
        </Link>
        <Link to="/recommendation" style={{ color: "white" }}>
          <ListItem border="none">도서 추천</ListItem>
        </Link>
        <Link to="/evaluation" style={{ color: "white" }}>
          <ListItem border="none">서비스 평가</ListItem>
        </Link>
        
      </SideBar>
      <Main>
        <PageHeader
          backgroundColor="white"
          leftElement={sideBarToggleButton}
          rightElement={loginButton}
          sticky={true}
        />
        {children}
      </Main>
    </Wrapper>
  );
};

export default HolyGrail;
