import React from "react";
import styled from "styled-components";

const Text = props => {
  const {
    children,
    position,
    top,
    left,
    bottom,
    width,
    padding,
    margin,
    color,
    size,
    bold,
    center,
    letterSpacing,
    lineHeight,
    whiteSpace,
    wordWrap,
    wordBreak,
    textDecoration,
    opacity,
    type,
    cursor,
    onClick,
  } = props;

  const styles = {
    children,
    position,
    top,
    left,
    bottom,
    width,
    padding,
    margin,
    color,
    size,
    bold,
    center,
    letterSpacing,
    lineHeight,
    whiteSpace,
    wordWrap,
    wordBreak,
    textDecoration,
    opacity,
    type,
    cursor,
    onClick,
  };

  if (type === "h1") {
    return <H1 {...styles}>{children}</H1>;
  }
  if (type === "h2") {
    return <H2 {...styles}>{children}</H2>;
  }

  if (type === "span") {
    return (
      <Span {...styles} onClick={onClick}>
        {children}
      </Span>
    );
  }

  return (
    <P {...styles} onClick={onClick}>
      {children}
    </P>
  );
};

Text.defaultProps = {
  children: null,
  color: "#3A3A3A",
  size: "1rem",
  onClick: () => {},
};

const H1 = styled.h1`
  color: ${props => props.color};
  font-size: ${props => props.size};
  font-family: "Montserrat";  
  ${props => (props.width ? `width: ${props.width};` : "")}
  ${props => (props.height ? `height: ${props.height};` : "")} 
  ${props => (props.padding ? `padding: ${props.padding};` : "")}
  ${props => (props.margin ? `margin: ${props.margin};` : "")}
  ${props => (props.center ? `text-align: center;` : "")}
`;

const H2 = styled.h2`
  color: ${props => props.color};
  font-size: 1.7rem;
  ${props => (props.width ? `width: ${props.width};` : "")}
  ${props => (props.height ? `height: ${props.height};` : "")} 
  ${props => (props.padding ? `padding: ${props.padding};` : "")}
  ${props => (props.margin ? `margin: ${props.margin};` : "")}
`;

const Span = styled.span`
  font-size: ${props => props.size};
  color: ${props => props.color};
  font-weight: ${props => (props.bold ? "600" : "400")};
  ${props => (props.width ? `width: ${props.width};` : "")}
  ${props => (props.height ? `height: ${props.height};` : "")} 
  ${props => (props.padding ? `padding: ${props.padding};` : "")}
  ${props => (props.margin ? `margin: ${props.margin};` : "")}
  ${props => (props.cursor ? `cursor: ${props.cursor};` : "")}
  ${props => (props.lineHeight ? ` line-height: ${props.lineHeight};` : "")}
  ${props => (props.whiteSpace ? ` white-space: ${props.whiteSpace};` : "")}
`;

const P = styled.p`
  font-size: ${props => props.size};
  font-weight: ${props => (props.bold ? "600" : "400")};
  color: ${props => props.color};
  position: ${props => props.position};
  ${props => (props.left ? `left: ${props.left};` : "")}
  ${props => (props.bottom ? `bottom: ${props.bottom};` : "")}
  top: ${props => props.top};
  ${props => (props.width ? `width: ${props.width};` : "")}
  ${props => (props.margin ? `margin: ${props.margin};` : "")}
  ${props => (props.padding ? `padding: ${props.padding};` : "")}
  ${props =>
    props.letterSpacing ? `letter-spacing: ${props.letterSpacing};` : ""}
  ${props => (props.lineHeight ? ` line-height: ${props.lineHeight};` : "")}
  ${props => (props.whiteSpace ? ` white-space: ${props.whiteSpace};` : "")}
  ${props =>
    props.textDecoration ? `text-decoration: ${props.textDecoration};` : ""}
  ${props => (props.cursor ? `cursor: ${props.cursor};` : "")}
`;

export default Text;
