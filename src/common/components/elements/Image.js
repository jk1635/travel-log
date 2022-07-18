import React from "react";
import styled from "styled-components";

const Image = props => {
  const {
    src,
    alt,
    width,
    height,
    size,
    objectFit,
    margin,
    onClick,
    maxWidth,
    maxHeight,
    backgroundSize,
    backgroundPosition,
    position,
    radius,
    type,
  } = props;

  const styles = {
    src,
    alt,
    width,
    height,
    size,
    objectFit,
    margin,
    onClick,
    maxWidth,
    maxHeight,
    backgroundSize,
    backgroundPosition,
    position,
    radius,
    type,
  };

  if (type === "icon") {
    return <IconBox {...styles} alt={alt} />;
  }

  return <ImageBox {...styles} alt={alt} onClick={onClick} />;
};

Image.defaultProps = {
  margin: false,
  padding: false,
  size: 15,
};

const IconBox = styled.img`
  --size: ${props => props.size}px;
  width: var(--size);
  height: var(--size);
  background-image: url("${props => props.src}");
  background-position: center;
  background-size: cover;
  ${props => (props.margin ? `margin: ${props.margin};` : "")}
`;

const ImageBox = styled.img`
  background-image: url("${props => props.src}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  ${props => (props.objectFit ? `object-fit: ${props.objectFit};` : "")}
  ${props => (props.maxWidth ? `max-width: ${props.maxWidth};` : "")}
  ${props => (props.maxHeight ? `max-height: ${props.maxHeight};` : "")}
  ${props => (props.width ? `width: ${props.width};` : "")}
  ${props => (props.height ? `height: ${props.height};` : "")}
  ${props => (props.radius ? `border-radius: ${props.radius};` : "")}
  ${props => (props.position ? `position: ${props.position};` : "")}
  ${props =>
    props.backgroundSize ? `background-size: ${props.backgroundSize};` : ""}
  ${props =>
    props.backgroundPosition
      ? `background-position: ${props.backgroundPosition};`
      : ""}
`;

export default Image;
