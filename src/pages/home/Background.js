import React from "react";
import styled from "styled-components";

const Background = ({ children }) => {
  return <BackgroundImg>{children}</BackgroundImg>;
};

const BackgroundImg = styled.div`
  width: 100%;
  background-color: var(--main);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  max-width: 100%;
  object-fit: cover;
`;

export default Background;
