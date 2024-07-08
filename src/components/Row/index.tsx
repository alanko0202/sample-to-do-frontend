import styled from '@emotion/styled';
import React, { ReactNode } from 'react';

interface Props {
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  maxWidth?: number;
  children?: ReactNode;
  border?: string;
  margin?: number;
  borderColor?: string;
  width?: number;
  padding?: number;
}
const StyledContainer = styled.div`
  flex-direction: ${(props: Props) => (!!props.flexDirection ? props.flexDirection : `column`)};
  justify-content: ${(props: Props) => (!!props.justifyContent ? props.justifyContent : `space-between`)};
  align-items: ${(props: Props) => (!!props.alignItems ? props.alignItems : `left`)};
  display: flex;
  max-width: ${(props: Props) => (!!props.maxWidth ? `${props.maxWidth}px` : `100%`)};
  border: ${(props: Props) => (!!props.border ? props.border : `0px solid`)};
  border-color: ${(props: Props) => (!!props.borderColor ? props.borderColor : `#ccc`)};
  margin: ${(props: Props) => (!!props.margin ? `${props.margin}px` : `0 auto`)};
  padding: ${(props: Props) => (!!props.padding ? `${props.padding}px` : `0px`)};
`;

const Row = ({ children, ...props }: Props) => {
  return <StyledContainer {...props}>{children}</StyledContainer>;
};

export default Row;
