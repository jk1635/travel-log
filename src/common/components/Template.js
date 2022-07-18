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
  /* height: 100vh; */
  background-color: var(--bggray);
  /* border: 1px solid green; */
`;

const Main = styled.main`
  width: 100%;
  max-width: 50rem;
  background-color: var(--white);
  /* border: 1px solid black; */
`;

export default Template;
