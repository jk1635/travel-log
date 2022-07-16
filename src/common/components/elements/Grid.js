import React from "react";
import styled from "styled-components";

const Grid = props => {
  const {
    children,
    position,
    top,
    left,
    bottom,
    display,
    justifyContent,
    alignItems,
    flexDirection,
    width,
    height,
    margin,
    padding,
    marginBottom,
    border,
    radius,
    bg,
    wordWrap,
    cursor,
    zIndex,
    isFlex,
    isFlex2,
  } = props;

  const styles = {
    children,
    position,
    top,
    left,
    bottom,
    display,
    justifyContent,
    alignItems,
    flexDirection,
    width,
    height,
    margin,
    padding,
    marginBottom,
    border,
    radius,
    bg,
    wordWrap,
    cursor,
    zIndex,
    isFlex,
    isFlex2,
  };
  return <GridBox {...styles}>{children}</GridBox>;
};

Grid.defaultProps = {
  chidren: null,
  width: "100%",
  margin: false,
  padding: false,
  isFlex: false,
};

const GridBox = styled.div`
  ${props => (props.position ? `position: ${props.position};` : "")}
  ${props => (props.top ? `top: ${props.top};` : "")}
  ${props => (props.left ? `left: ${props.left};` : "")}
  ${props => (props.bottom ? `bottom: ${props.bottom};` : "")}
  ${props => (props.display ? `display: ${props.display};` : "")}
  ${props =>
    props.justifyContent ? `justify-content: ${props.justifyContent};` : ""}
  ${props => (props.alignItems ? `align-items: ${props.alignItems};` : "")}
  ${props =>
    props.flexDirection ? `flex-direction: ${props.flexDirection};` : ""}  
  ${props => (props.width ? `width: ${props.width};` : "")}
  ${props => (props.height ? `height: ${props.height};` : "")}
  ${props => (props.padding ? `padding: ${props.padding};` : "")}
  ${props => (props.margin ? `margin: ${props.margin};` : "")}
  ${props =>
    props.marginBottom ? `margin-bottom: ${props.marginBottom};` : ""}
  ${props => (props.border ? `border: ${props.border};` : "")}
  ${props => (props.radius ? `border-radius: ${props.radius};` : "")}
  ${props => (props.bg ? `background: ${props.bg};` : "")}
  ${props => (props.wordWrap ? `word-wrap: ${props.wordWrap};` : "")}
  ${props => (props.cursor ? `cursor: ${props.cursor};` : "")}
  ${props => (props.zIndex ? `z-index: ${props.zIndex};` : "")}
  // space-beteween
  ${props =>
    props.isFlex
      ? `display: flex; align-items: center; justify-content: space-between;`
      : ""}
  // center
  ${props =>
    props.isFlex2
      ? `display: flex; align-items: center; justify-content: center;`
      : ""}
`;

export default Grid;
