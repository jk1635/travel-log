import React from "react";
import styled from "styled-components";

const Template = ({ children }) => {
  return (
    <MainBox>
      <Main>{children}</Main>
    </MainBox>
  );
};

const MainBox = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background-color: var(--bggray);
`;

const Main = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 50rem;
  background-color: var(--white);
`;

export default Template;
