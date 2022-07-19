import React from "react";
import styled from "styled-components";

// assets
import { backgroundImage } from "../../common/assets";

const Background = ({ children }) => {
  return <BackgroundImg>{children}</BackgroundImg>;
};

const BackgroundImg = styled.div`
  width: 100%;
  background-color: var(--gray);
  /* display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  max-width: 100%;
  object-fit: cover; */
`;

export default Background;
