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
  background-color: var(--bggray);
`;

const Main = styled.main`
  width: 100%;
  max-width: 50rem;
  height: 100vh;
  background-color: var(--bgwhite);
`;

export default Template;
