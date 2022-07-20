import React from "react";
import styled from "styled-components";

const RoundEdge = ({ bottom, rightRadius, leftRadius }) => {
  const styles = {
    bottom,
    rightRadius,
    leftRadius,
  };
  return <RoundEdgeBox {...styles}></RoundEdgeBox>;
};

const RoundEdgeBox = styled.div`
  position: absolute;
  bottom: ${props => props.bottom};
  border-top-right-radius: ${props => props.rightRadius};
  border-top-left-radius: ${props => props.leftRadius};
  width: 100%;
  height: 2rem;
  background-color: var(--white);
  z-index: 1;
`;

export default RoundEdge;
