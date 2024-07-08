import styled from '@emotion/styled';
import React from 'react';

interface Props {
  title: string;
  margin?: number;
  color?: string;
  bgColor?: string;
  padding?: number;
  width?: number;
  height?: number;
  borderRadius?: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  name?: string;
}

const StyledButton = styled.button`
  color: ${(props: Props) => (!!props.color ? props.color : `#fff`)};
  background-color: ${(props: Props) => (!!props.bgColor ? props.bgColor : `#675de7`)};
  margin: ${(props: Props) => (!!props.margin ? `${props.margin}px` : `4px`)};
  padding: ${(props: Props) => (!!props.padding ? `${props.padding}px` : `4px`)};
  height: ${(props: Props) => (!!props.height ? `${props.height}px` : `30px`)};
  width: ${(props: Props) => (!!props.width ? `${props.width}px` : `100px`)};
  border-radius: ${(props: Props) => (!!props.borderRadius ? `${props.borderRadius}px` : `5px`)};
  border: 1px solid;
  type="button"
`;

const Button = ({ ...props }: Props) => {
  return <StyledButton {...props}>{props.title}</StyledButton>;
};

export default Button;
