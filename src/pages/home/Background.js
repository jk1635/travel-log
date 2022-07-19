import React from "react";
import styled from "styled-components";

import { backgroundImage } from "../../common/assets";
import MultipleMarkerMap from "./MultipleMarkerMap";

const Background = ({ area, children }) => {
  return (
    <BackgroundImg>
      <MultipleMarkerMap area={area}>{children}</MultipleMarkerMap>
    </BackgroundImg>
  );
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
