import React from "react";
import styled from "styled-components";

const Image = props => {
  const { src, alt, width, opacity, size, objectFit } = props;

  const styles = { src, alt, width, opacity, size, objectFit };

  return <ImageBox {...styles} alt={alt} />;
};

Image.defaultProps = {
  margin: false,
  padding: false,
  size: 15,
};

const ImageBox = styled.img`
  --size: ${props => props.size}px;
  width: var(--size);
  height: var(--size);
  background-image: url("${props => props.src}");
  background-position: center;
  background-size: cover;
  ${props => (props.opacity ? `opacity: ${props.opacity};` : "")}
  ${props => (props.objectFit ? `object-fit: ${props.objectFit};` : "")}
`;

export default Image;
