import React from "react";
import styled from "styled-components";

const RoundEdge = ({ bottom }) => {
  const styles = {
    bottom,
  };
  return <RoundEdgeBox {...styles}></RoundEdgeBox>;
};

const RoundEdgeBox = styled.div`
  position: absolute;
  bottom: ${props => props.bottom};
  width: 100%;
  height: 3rem;
  background-color: var(--white);
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  z-index: 1;
`;

export default RoundEdge;
