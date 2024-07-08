import styled from '@emotion/styled';
import React from 'react';

interface Props {
  title: string;
  margin?: number;
  color?: string;
  bgColor?: string;
  fontSize?: number;
  fontWeight?: number;
  fontFamily?: string;
  fontStyle?: string;
  padding?: number;
}
const StyledText = styled.div`
  font-size: ${(props: Props) => (!!props.fontSize ? `${props.fontSize}px` : `15px`)};
  font-weight: ${(props: Props) => (!!props.fontWeight ? props.fontWeight : `400`)};
  font-style: ${(props: Props) => (!!props.fontStyle ? props.fontStyle : `normal`)};
  font-family: ${(props: Props) => (!!props.fontFamily ? props.fontFamily : `Helvetica Neue, Helvetica, sans-serif`)};
  margin: ${(props: Props) => (!!props.margin ? `${props.margin}px` : `4px`)};
  padding: ${(props: Props) => (!!props.padding ? `${props.padding}px` : `4px`)};
  color: ${(props: Props) => (!!props.color ? props.color : `#000`)};
  background-color: ${(props: Props) => (!!props.bgColor ? props.bgColor : `#fff`)};
  background-color: ${(props: Props) => (!!props.bgColor ? props.bgColor : `#fff`)};
  text-wrap: pretty;
  text-overflow: ellipsis;

`;

const Text = ({ ...props }: Props) => {
  return <StyledText {...props}>{props.title}</StyledText>;
};

export default Text;
